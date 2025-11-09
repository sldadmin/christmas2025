// GitHub Data Synchronization Module

class GitHubSync {
    constructor(config) {
        this.owner = config.owner;
        this.repo = config.repo;
        this.branch = config.branch;
        this.token = config.token;
        this.filePath = 'data.json';
        this.apiBase = 'https://api.github.com';
    }

    // Fetch data from GitHub
    async fetchData() {
        try {
            const url = `${this.apiBase}/repos/${this.owner}/${this.repo}/contents/${this.filePath}`;
            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const fileData = await response.json();
            const content = atob(fileData.content);
            return {
                data: JSON.parse(content),
                sha: fileData.sha
            };
        } catch (error) {
            console.error('Error fetching from GitHub:', error);
            // Fallback to localStorage if GitHub fails
            const localData = {
                calendarSelections: JSON.parse(localStorage.getItem('christmasSelections') || '{}'),
                foodPreferences: JSON.parse(localStorage.getItem('foodPreferences') || '{}')
            };
            return { data: localData, sha: null };
        }
    }

    // Save data to GitHub
    async saveData(data, sha) {
        try {
            const content = btoa(JSON.stringify(data, null, 2));
            const url = `${this.apiBase}/repos/${this.owner}/${this.repo}/contents/${this.filePath}`;

            const body = {
                message: 'Update Christmas selections',
                content: content,
                branch: this.branch
            };

            if (sha) {
                body.sha = sha;
            }

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const result = await response.json();
            return result.content.sha;
        } catch (error) {
            console.error('Error saving to GitHub:', error);
            // Fallback to localStorage if GitHub fails
            localStorage.setItem('christmasSelections', JSON.stringify(data.calendarSelections));
            localStorage.setItem('foodPreferences', JSON.stringify(data.foodPreferences));
            return sha;
        }
    }
}
