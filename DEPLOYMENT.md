# Deploying Christmas Picker to Google Cloud

## Prerequisites

1. Install Google Cloud SDK (gcloud CLI) if you haven't already:
   ```bash
   # macOS
   brew install --cask google-cloud-sdk

   # Or download from: https://cloud.google.com/sdk/docs/install
   ```

2. You'll need a Google Cloud account and project

## Deployment Steps

### 1. Initialize gcloud (first time only)

```bash
gcloud init
```

This will:
- Log you into your Google account
- Let you select or create a Google Cloud project
- Set your default region

### 2. Enable App Engine

```bash
gcloud app create
```

You'll be prompted to select a region (choose one close to your family, e.g., `us-central` for USA)

### 3. Deploy the Application

From the `/Users/dmagnus/Documents/Christmas` directory, run:

```bash
gcloud app deploy
```

- Type `Y` when prompted to confirm
- Wait 2-3 minutes for deployment

### 4. Open Your App

```bash
gcloud app browse
```

This will open your Christmas picker in the browser. Share this URL with your family!

## Your App URL

After deployment, your app will be available at:
```
https://YOUR-PROJECT-ID.uc.r.appspot.com
```

## Updating Your Available Dates

1. Edit the `hostAvailableDates` array in [christmas-picker.html](christmas-picker.html:283)
2. Run `gcloud app deploy` again
3. The changes will be live in 2-3 minutes

## Cost

Google Cloud App Engine has a free tier that includes:
- 28 frontend instance hours per day
- 1 GB storage
- 1 GB network egress per day

This simple calendar app will easily stay within the free tier limits!

## Troubleshooting

### "Project not found" error
Run `gcloud config set project YOUR-PROJECT-ID`

### "App Engine not enabled"
Run `gcloud app create` and select your region

### Need to switch projects
Run `gcloud config set project DIFFERENT-PROJECT-ID`

## View Logs (if needed)

```bash
gcloud app logs tail -s default
```
