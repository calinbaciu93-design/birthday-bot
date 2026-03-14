🎂 Birthday SMS Bot

A simple Node.js automation script that checks a list of people and automatically sends them a birthday SMS using Twilio.

The script reads a local database.json file, compares each stored birthday with today's date, and sends a personalized birthday message when a match is found.

This project was built as a small automation exercise and can be extended for reminders, scheduled messages, or larger notification systems.


🚀 Features

1. Reads birthday data from a JSON database

2. Automatically detects birthdays based on the current date

3. Sends SMS messages using Twilio API

4. Logs successful messages and errors

5. Displays a message if there are no birthdays today

🛠 Technologies Used

- Node.js

- Twilio SMS API

- JavaScript

- JSON database

📁 Project Structure
birthday-bot/

│
├── birthdayBot.js
├── database.json
└── README.md

Example database.json structure:

{
  "people": [
    {
      "fullName": "John Smith",
      "birthday": "1998-05-22",
      "phone": "+1234567890"
    }
  ]
}
⚙️ Setup
1. Clone the repository
git clone https://github.com/yourusername/birthday-bot.git
cd birthday-bot
2. Install dependencies
npm install twilio
3. Configure Twilio credentials

Replace the placeholders in the script with your Twilio details:

const accountSid = "ACCOUNT_SID";
const authToken = "AUTH_TOKEN";
const twilioNumber = "TWILIO_NUMBER";

You can obtain these from your Twilio dashboard.

▶️ Running the Script

Run the script with:

node birthdayBot.js

The program will:

Read the database.json

Check if any birthdays match today's date

Send SMS messages to those people

⏰ Automation (Optional)

This script can easily be automated using:

GitHub Actions

Cron jobs

Cloud schedulers

For example, running it once per day to automatically send birthday messages.

📌 Example Output
Happy Birthday, John Smith!
Message sent: SMXXXXXXXXXXXXXXXX

Or if there are no birthdays:

No birthdays today.
