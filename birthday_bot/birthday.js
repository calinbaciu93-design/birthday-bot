function checkBirthday() {
  fetch("./database.json")
    .then((response) => response.json())
    .then((data) => {
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
        console.log(`Happy Birthday, ${birthdayPeople}!🎉🥳🎁<br>`);
      } else {
        console.log("No birthdays today.");
      }
    });
}
