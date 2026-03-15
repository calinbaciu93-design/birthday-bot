const fs = require('fs');
const path = require('path');
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

const client = twilio(accountSid, authToken);

function checkBirthday() {
  const dataPath = path.join(__dirname, 'database.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
                                          
      const today = new Date();
      const todayMonth = today.getMonth();
      const todayDay = today.getDate();

      let birthdayPeople = 0;

      data.people.forEach((person) => {
        const birthday = new Date(person.birthday);

        if (
          birthday.getMonth() === todayMonth &&
          birthday.getDate() === todayDay
        ) {
          birthdayPeople++;
          console.log(`Happy Birthday, ${person.fullName}!`);
          
          client.messages.create({
            body: `Happy Birthday, ${person.fullName}!`,
            from: twilioNumber,
            to: person.phone
        })
          .then(message => console.log("Message sent:", message.sid))
          .catch(err => console.log(err));
        }
      });
      if (birthdayPeople === 0) {
        console.log("No birthdays today.");
      }
}

checkBirthday();
