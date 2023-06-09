// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(
      `Thank you, ${names[i]}, for the wonderful surprise gift!`
    );
  }
  return thankYouMessages;
}
const number = 10;
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

console.log(writeCards(names));
console.log(countDown(number));
