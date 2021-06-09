//allow user to enter a name they wish to use
let definedName = prompt('Enter your name?')

//pick a random name from the list for the user
let randomName = ['Zoe', 'Anna', 'Georgia', 'Lily', 'Ella'];
let pickedRandomName = randomName[Math.floor(Math.random() * 4 + 0)];
console.log(pickedRandomName)//optional line

//if the user doesn't enter anything, print the message with the random name picked, otherwise, print the message with user defined name.
//empty speech marks with noting inbetween represents nothing is entered.
if (definedName == ''){
  console.log('Welcome ' + pickedRandomName + ' to the Number Guessing Game!')
  }else{
  console.log('Welcome ' + definedName + ' to the Number Guessing Game!')
  }







// let round = 1;
// let point = 0;
// play();

// function play() {
//   random = Math.floor(Math.random() * 20 + 1);
//   let round = 1;
//   do {
//     guess = prompt('Enter a number from 1-20:');
//     if (guess > random) {
//       console.log('Your guess is bigger');
//     } else if (guess < random) {
//       console.log('Your guess is smaller');
//     } else {
//       console.log('You got it correct');
//       point++
//       console.log('Your point now is ' + point);
//       break;
//     }

//     round++

//   }
//   while (round <= 3) {

//   }


//   again = prompt('Do you want to play again?');
//   if (again == 'y') {
//     play();

//   } else {
//     console.log('Your final point is ' + point)
//     console.log('Game Over');
//   }
// }


