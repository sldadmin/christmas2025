# How to Deploy Your Christmas Planner (100% FREE)

Your Christmas planner is now ready to deploy! It's completely static and will work perfectly with free hosting.

## Method 1: Netlify Drop (Easiest - 2 Minutes)

1. **Visit**: https://app.netlify.com/drop

2. **Drag & Drop**:
   - Open Finder and navigate to `/Users/dmagnus/Documents/Christmas`
   - Select ALL files in the folder:
     - index.html
     - menu.html
     - calendar.html
     - food.html
     - README.md
     - DEPLOYMENT.md
     - .gcloudignore (optional)
   - Drag them onto the Netlify Drop page

3. **Get Your URL**:
   - Netlify will instantly give you a free URL like `https://random-name-12345.netlify.app`
   - Share this URL with your family!

4. **Optional - Custom Name**:
   - Sign up for a free Netlify account
   - Click "Site settings" > "Change site name"
   - Rename it to something like `magnus-christmas-2025`
   - Your new URL: `https://magnus-christmas-2025.netlify.app`

## Method 2: GitHub Pages (Also Free)

If you prefer GitHub:

1. Create a GitHub account at https://github.com
2. Create a new repository called `christmas-2025`
3. Upload all your HTML files
4. Go to Settings > Pages
5. Enable GitHub Pages
6. Your site will be at: `https://YOUR-USERNAME.github.io/christmas-2025`

## How It Works

- **Data Storage**: All selections are stored in each person's browser (localStorage)
- **Privacy**: No data is sent to any server
- **Offline**: Works even without internet after first load
- **Free Forever**: Both Netlify and GitHub Pages are 100% free for static sites

## Sharing Instructions for Your Family

Once deployed, send them:

1. The URL (e.g., `https://your-site.netlify.app`)
2. Instructions:
   - Click your name
   - Go to Calendar to pick dates
   - Go to Food to share preferences
   - Data saves automatically in your browser

## Important Notes

- Each person needs to use the SAME device/browser to see their selections
- Data is NOT shared between family members automatically
- To see everyone's choices, ask them to screenshot their selections
- Or, each person can share their choices in a family group chat

## Need Updates?

To update the site:
1. Make changes to your HTML files
2. Drag and drop them to Netlify Drop again
3. Or use `netlify deploy --prod` if you set up the CLI

Enjoy your Christmas gathering planner!
