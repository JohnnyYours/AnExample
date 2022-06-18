/*Определите необходимые классы, чтобы мы могли запустить блоки кода ниже:

Класс `User` должен иметь 2 метода экземпляра:

- `canVote()` возвращает `true`, если возраст пользователя 18 лет и старше
- `getFullName()` возвращает имя и фамилию, разделенные пробелом

Класс `Admin` должен иметь 3 метода экземпляра:

- `canVote()` возвращает `true`, если возраст пользователя 18 лет и старше
- `getFullName()` возвращает имя и фамилию, разделенные пробелом, за которыми идет префикс `[admin]`
- `updateConfig()` возвращает строку `"Config updated"`*/

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  canVote() {
    return this.age >= 18;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`;
  }

  updateConfig() {
    return "Config updated";
  }
}

// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"
