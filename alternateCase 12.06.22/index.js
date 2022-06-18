/*
  Title:
  Alternate case
  Description:
  Напишите функцию alternateCase, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.
  Examples:
  Hello World -> hELLO wORLD
*/
 
 
const alternateCase = str => {
  let formatted = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
      formatted += str[i].toLowerCase();
    } 
    else{
      formatted += str[i].toUpperCase();
    }
  }
  return formatted;
}
console.log(alternateCase("Hello World"));
