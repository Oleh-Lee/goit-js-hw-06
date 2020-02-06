import users from "./user.js";
//======================task 1 ================
console.log("Получить массив имен всех пользователей (поле name).");
const getUserNames = users => users.map(name => name.name);

console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//======================task 2 ================
console.log(
  "Получить массив объектов пользователей по цвету глаз (поле eyeColor)."
);

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
// твой код
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//======================task 3 ================
console.log("Получить массив имен пользователей по полу (поле gender).");

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === "male").map(find => find.name);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//======================task 4 ================
console.log("Получить массив только неактивных пользователей (поле isActive).");

const getInactiveUsers = users =>
  users.filter(user => {
    return user.isActive === false;
  });

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//======================task 5 ================

console.log(
  "Получить пользоваля (не массив) по email (поле email, он уникальный)."
);

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//======================task 6 ================

console.log(
  "Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)."
);

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//======================task 7 ================

console.log("Получить общую сумму баланса (поле balance) всех пользователей.");

const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

//======================task 8 ================

console.log(
  "Массив имен всех пользователей у которых есть друг с указанным именем."
);

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(find => find.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//======================task 9 ================

console.log(
  "Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)"
);

const getNamesSortedByFriendsCount = users =>
  users.sort((a, b) => a.friends.length - b.friends.length)
    .map(users => users.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//======================task 10 ================

console.log(
  "Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке."
);

const getSortedUniqueSkills = users => users.reduce((allSkills, users)=>{
  allSkills.push(...users.skills);
  return allSkills;
}, [])
.filter((elem, idx, arr) => arr.indexOf(elem) === idx)
.sort()
  
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
