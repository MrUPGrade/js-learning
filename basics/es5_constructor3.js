function User(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.getAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return ageDate.getUTCFullYear() - 1970;
  };
}

console.log('Create user');
const u1 = new User('John', '3-6-1990');

console.log(u1);
console.log(u1.getAge());
