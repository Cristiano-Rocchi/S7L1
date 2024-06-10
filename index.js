class user {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageCompared(allUser) {
    if (this.age > allUser.age) {
      console.log(this.name + " è piu anziano di " + allUser.name);
    } else if (this.age < allUser.age) {
      console.log(allUser.name + " è piu anziano di " + this.name);
    } else {
      console.log("hanno la stessa eta");
    }
  }
}

const profile = new user();
console.log(profile);
