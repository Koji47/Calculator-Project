// // regex declarations
// const opRegex = /x%+-/; //current wip operators
// const numRegex = /\d/; //digits 0-9

// // arrays declared
// let num: number[] = [];
// let op: string[] = [];

// // calc state (display 0 on screen)
// let isZeroDisplayed: boolean = true;

// // generic
// // - let ts know the return type
// const buttons = document.querySelectorAll<HTMLButtonElement>(".keypad__buttons");
// const screen = document.querySelector<HTMLElement>(".screen__sum");
// const output = document.querySelector<HTMLDivElement>(".screen__output");
// const opButton = document.querySelector<HTMLButtonElement>(".keypad__op");

// // avoids is possibly null error
// if (!buttons) {
//   throw new Error("buttons error");
// }
// if (!screen) {
//   throw new Error("screen error");
// }
// if (!output) {
//   throw new Error("output error");
// }
// if (!opButton) {
//   throw new Error("operator error");
// }

// // functions - numbers
// const handleNumButton = (button: HTMLButtonElement) => {
//   let digit = button.innerText;

//   if (isZeroDisplayed) {
//     screen.innerText = digit;
//     isZeroDisplayed = false;
//   } else {
//     let storedCalc = screen.innerText;
//     storedCalc += digit;
//     screen.innerText = storedCalc;
//   }
// };

// // // functions - operator
// // const handleOpButton = (button: HTMLButtonElement) => {
// //   let operator = opButton.innerText;
// //   isZeroDisplayed = true;
// //   op.push(operator);
// // };

// // // store current number
// // const currentNumber = parseFloat(screen.innerText);
// // num.push(currentNumber);
// // screen.innerText = "0";

// // functions - clear
// const handleClearButton = () => {
//   isZeroDisplayed = true;
//   screen.innerText = "0";
// };
// // // functions - equals
// // const handleEqualsButton = () => {
// //   let sum: string = screen.innerText;
// //   output.innerText = sum;
// //   const result = calculateSum(sum);
// //   output.innerText = result.toString();
// //   isZeroDisplayed = true;
// // };

// // event handlers
// const handleButtonInput = (event: Event) => {
//   const button = event.target as HTMLButtonElement;
//   let buttonInput: string = button.innerText;

//   if (buttonInput === "C") {
//     handleClearButton();
//   } else {
//     handleNumButton(button);
//     console.log("button-clicked");
//     // } else if (buttoninput === "=") {
//     //   handleEqualsButton();
//     // }
//   }
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", handleButtonInput);
// });
