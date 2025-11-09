# Christmas Gathering 2025 Planner

A multi-page web application for coordinating Christmas gathering dates and food preferences with family and friends.

## Features

### 1. Name Selection Page
- Select your name from a predefined list of 14 guests
- Names: David, Annie, Scott, Izzy, Judy, Kerrie, Michael, Michael Jr., Keavin, Molly, Alex, Claire, Emily, Brandon

### 2. Main Menu
- Navigate to Calendar or Food preferences
- Change your name if needed

### 3. Calendar Page
- View December 15-31, 2025
- Host-available dates shown in green (Dec 15-21, 24-30, excluding 22-23)
- Select multiple dates you're available
- Click the ☆ star to mark your preferred date (turns yellow ⭐)
- See how many people selected each date
- View all attendees and their selections

### 4. Food Preferences Page
- Select dietary restrictions (Vegetarian, Vegan, Gluten-Free, Dairy-Free, Nut Allergy)
- Indicate what you can bring (Appetizers, Main Dish, Side Dish, Dessert, Drinks)
- Add additional notes or specific items you'll bring

## Data Storage

- **Client-side**: localStorage for immediate access and offline support
- **Server-side**: XML file storage via Flask backend
- Data syncs automatically when online
- Falls back to localStorage if server is unavailable

## Technical Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Backend**: Python Flask
- **Deployment**: Google App Engine
- **Data Format**: XML

## File Structure

```
/Users/dmagnus/Documents/Christmas/
├── index.html           # Name picker page
├── menu.html            # Main menu
├── calendar.html        # Date selection
├── food.html            # Food preferences
├── main.py              # Flask backend
├── requirements.txt     # Python dependencies
├── app.yaml             # Google App Engine config
├── christmas_data.xml   # Data storage (generated)
└── DEPLOYMENT.md        # Deployment instructions
```

## XML Data Structure

```xml
<christmasGathering year="2025">
  <calendarSelections>
    <guest name="David" lastUpdated="2025-11-09T10:00:00">
      <dates>
        <date>20</date>
        <date>21</date>
        <date>25</date>
      </dates>
      <preferred>25</preferred>
    </guest>
  </calendarSelections>
  <foodPreferences>
    <guest name="David" lastUpdated="2025-11-09T10:00:00">
      <dietaryRestrictions>
        <restriction>glutenFree</restriction>
      </dietaryRestrictions>
      <contributions>
        <contribution>dessert</contribution>
      </contributions>
      <notes>I'll bring my famous apple pie!</notes>
    </guest>
  </foodPreferences>
</christmasGathering>
```

## Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run locally
python main.py

# Open browser to http://localhost:8080
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for Google Cloud deployment instructions.

## Customization

### Change Available Dates
Edit `hostAvailableDates` in [calendar.html](calendar.html:500):
```javascript
const hostAvailableDates = [15, 16, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 29, 30];
```

### Modify Guest List
Edit `guestNames` array in [index.html](index.html:117):
```javascript
const guestNames = ['David', 'Annie', 'Scott', ...];
```

### Change Total Guest Count
Update stats in [calendar.html](calendar.html:485) to match your guest count.
