// Firebase Data Synchronization Module

class FirebaseSync {
    constructor(databaseURL) {
        this.databaseURL = databaseURL.replace(/\/$/, ''); // Remove trailing slash
    }

    // Fetch data from Firebase
    async fetchData() {
        try {
            const response = await fetch(`${this.databaseURL}/christmas.json`);

            if (!response.ok) {
                throw new Error(`Firebase error: ${response.status}`);
            }

            const data = await response.json();
            return {
                calendarSelections: data?.calendarSelections || {},
                foodPreferences: data?.foodPreferences || {}
            };
        } catch (error) {
            console.error('Error fetching from Firebase:', error);
            // Return empty data on error
            return {
                calendarSelections: {},
                foodPreferences: {}
            };
        }
    }

    // Save calendar selections to Firebase
    async saveCalendarSelections(selections) {
        try {
            const response = await fetch(`${this.databaseURL}/christmas/calendarSelections.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selections)
            });

            if (!response.ok) {
                throw new Error(`Firebase error: ${response.status}`);
            }

            return true;
        } catch (error) {
            console.error('Error saving calendar selections to Firebase:', error);
            return false;
        }
    }

    // Save food preferences to Firebase
    async saveFoodPreferences(preferences) {
        try {
            const response = await fetch(`${this.databaseURL}/christmas/foodPreferences.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferences)
            });

            if (!response.ok) {
                throw new Error(`Firebase error: ${response.status}`);
            }

            return true;
        } catch (error) {
            console.error('Error saving food preferences to Firebase:', error);
            return false;
        }
    }
}
