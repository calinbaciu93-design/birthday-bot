const fs = require('fs');
const path = require('path');

function checkBirthday() {
  const dataPath = path.join(__dirname, 'database.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
                                          
      const today = new Date();
      const todayMonth = today.getMonth();
      const todayDay = today.getDate();

      let birthdayPeople = [];

      data.people.forEach((person) => {
        const birthday = new Date(person.birthday);

        if (
          birthday.getMonth() === todayMonth &&
          birthday.getDate() === todayDay
        ) {
          birthdayPeople.push(person.fullName);
        }
      });
      if (birthdayPeople.length > 0) {
        console.log(`Happy Birthday, ${birthdayPeople.join(", ")}!🎉🥳🎁`);
      } else {
        console.log("No birthdays today.");
      }
}

checkBirthday();
