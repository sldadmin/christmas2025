# GitHub Setup Instructions for Christmas 2025 Planner

Your Christmas planner now uses GitHub for shared data storage! Everyone can see everyone else's choices in real-time.

## What's Been Done

✅ Created private GitHub repository: `christmas2025`
✅ Added data.json file to store selections
✅ Updated calendar.html and food.html to sync with GitHub
✅ Added GitHub sync module

## What You Need To Do

### Step 1: Create a GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens/new
2. Fill out the form:
   - **Note**: "Christmas 2025 Planner"
   - **Expiration**: Choose "90 days" or longer
   - **Scopes**: Check the box for `repo` (Full control of private repositories)
3. Click **Generate token** at the bottom
4. **IMPORTANT**: Copy the token immediately (it starts with `ghp_...`) - you won't be able to see it again!

### Step 2: Add Your Token to config.js

1. Open `/Users/dmagnus/Documents/Christmas/config.js`
2. Replace `'YOUR_GITHUB_TOKEN_HERE'` with your actual token
3. Save the file

**Example:**
```javascript
const GITHUB_CONFIG = {
    owner: 'sldadmin',
    repo: 'christmas2025',
    branch: 'main',
    token: 'ghp_1234567890abcdefghijklmnopqrstuvwxyz'  // Your actual token here
};
```

### Step 3: Deploy to Netlify

The config.js file contains your private token, so we need to handle it carefully:

**Option A: Environment Variables (Recommended)**
1. Don't commit config.js to your main site
2. Add the token as a Netlify environment variable
3. This is more secure but requires a bit more setup

**Option B: Simple Deploy (Quick)**
1. Deploy all files including config.js to Netlify
2. Keep your repository **private**
3. This works but your token is in the deployed files

For now, let's go with Option B since your repo is already private:

```bash
# Navigate to your Christmas directory
cd /Users/dmagnus/Documents/Christmas

# Deploy to Netlify (you'll need to install Netlify CLI if you haven't)
netlify deploy --prod
```

## How It Works Now

- When anyone selects dates or food preferences, it saves to GitHub
- Everyone sees everyone else's choices automatically
- The count at the bottom of each day shows total selections from all users
- If GitHub is down, it falls back to localStorage (local-only storage)

## Testing

1. Open the site in one browser (e.g., Chrome)
2. Select a name and pick some dates
3. Open the site in another browser (e.g., Safari)
4. Select a different name
5. You should see the first person's selections!

## Security Notes

- Your GitHub repository is **private** - only you can access it
- The Personal Access Token gives access to your private repos
- Don't share the config.js file or the token with anyone
- You can revoke the token anytime at: https://github.com/settings/tokens

## Troubleshooting

**Problem**: "API rate limit exceeded"
- **Solution**: You hit GitHub's rate limit. Wait an hour or create a new token.

**Problem**: Data not syncing
- **Solution**: Check that your token is correctly added to config.js
- **Solution**: Check browser console (F12) for errors

**Problem**: "404 Not Found"
- **Solution**: Make sure the repository name is exactly `christmas2025`

## Next Steps

After adding your token and testing:
1. Deploy to Netlify
2. Share the URL with your family
3. Everyone can now see each other's date selections!

Repository URL: https://github.com/sldadmin/christmas2025
