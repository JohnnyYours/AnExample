/*
  Title:
  Create Phone Number
  Description:
  Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
 
const createPhoneNumber = numbers => {
  // 1 вариант решения
  // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  // 2 вариант решения
  let number = numbers.join('');
  return `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
