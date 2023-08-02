// regex declarations - will continue to try and implement regex once basic calculator is finished
// const opRegex = /x%+-/; //current wip operators
// const numRegex = /\d/; //digits 0-9

// arrays declared - will continue to try implement array once calculator is operational
// let num: number[] = [];
// let op: string[] = [];
let numOne = "";
let numTwo = "";
let numThree = "";
let numFour = "";
let numFive = "";

let op = "";

// generic
//query selectors
const numButton = document.querySelectorAll<HTMLButtonElement>(".keypad__num");
const opButton = document.querySelectorAll<HTMLButtonElement>(".keypad__op");
const equalsButton =
  document.querySelector<HTMLButtonElement>(".keypad__equals");
const clearButton = document.querySelector<HTMLButtonElement>(".keypad__clear");
const deleteButton =
  document.querySelector<HTMLButtonElement>(".keypad__delete");
const dotButton = document.querySelector<HTMLButtonElement>(".keypad__dot");
const displayCalculation = document.querySelector<HTMLElement>(".screen__sum");
const displayOutput = document.querySelector<HTMLElement>(".screen__output");
const lightDarkToggle =
  document.querySelector<HTMLButtonElement>(".navbar__lightdark");
const body = document.querySelector<HTMLElement>("body");
const lightIMG = document.querySelector<HTMLImageElement>("#light");
const darkIMG = document.querySelector<HTMLImageElement>("#dark");
const screenSelector = document.querySelector<HTMLDivElement>(".screen");
const keypadButtonSelector =
  document.querySelectorAll<HTMLButtonElement>(".keypad__buttons");

// error checks
if (!numButton) {
  throw new Error("numButtons error");
}
if (!opButton) {
  throw new Error("opButtons error");
}
if (!equalsButton) {
  throw new Error("equalsButtons error");
}
if (!clearButton) {
  throw new Error("clear error");
}
if (!deleteButton) {
  throw new Error("delete error");
}
if (!dotButton) {
  throw new Error("dot error");
}
if (!displayCalculation) {
  throw new Error("display error");
}
if (!displayOutput) {
  throw new Error("display output error");
}
if (!lightDarkToggle) {
  throw new Error("Light Dark error");
}
if (!body) {
  throw new Error("body error");
}
if (!lightIMG || !darkIMG) {
  throw new Error("light dark error");
}
if (!keypadButtonSelector) {
  throw new Error("keypad selector error");
}

// functions - display the equation onto second screen
const showHistory = () => {
  const history = `${numOne} ${op} ${numTwo}`; //example history = 1 + 2
  displayCalculation.textContent = history; //changes screen__sum to "history"
};

// functions - calculate given equation depending on op
const calculateOutput = (numOne: number, op: string, numTwo: number) => {
  // console.log(numOne, op, numTwo);
  if (op === "+") {
    return numOne + numTwo;
  }
  if (op === "-") {
    return numOne - numTwo;
  }
  if (op === "x") {
    return numOne * numTwo;
  }
  if (op === "/") {
    return numOne / numTwo;
  }
  if (op === "") {
    return "";
  } else console.log("invalid op");
};

// event handler - numbers
const handleNumButton = (button: HTMLButtonElement) => {
  let selectedNum = button.innerText;
  console.log(selectedNum);

  if (op === "") {
    // if numOne is empty and the selected number is "-"
    if (numOne === "" && selectedNum === "-") {
      // add the negative sign to the empty numOne
      numOne += selectedNum;
      op = "";
    } else if (numOne !== "" || (numOne === "" && selectedNum !== "-")) {
      numOne += selectedNum;
    }
  } else {
    // if numTwo is empty and the selected number is "-"
    if (numTwo === "" && selectedNum === "-") {
      // Handle negative sign at the beginning of numTwo
      numTwo += selectedNum;
      op = "";
    } else if (numTwo !== "" || (numTwo === "" && selectedNum !== "-")) {
      numTwo += selectedNum;
    }
  }
  showHistory();
  console.log(numOne);
  console.log(op);
  console.log(numTwo);
};

// event handler - operator
const handleOpButton = (button: HTMLButtonElement) => {
  const selectedOp = button.innerText;
  op = selectedOp;
  console.log(selectedOp);
  showHistory();
};

// event handler - equals
const handleEqualsButton = (button: HTMLButtonElement) => {
  let calculation = calculateOutput(Number(numOne), op, Number(numTwo));
  displayOutput.textContent = String(calculation);
};

// event handler - clear
const handleClearButton = () => {
  numOne = "";
  numTwo = "";
  op = "";
  displayCalculation.textContent = String("");
  displayOutput.textContent = String("");
};

// event handler - dot
const handleDotButton = () => {
  const dot = ".";

  if (op === "") {
    if (!numOne.includes(dot)) {
      numOne += dot;
    }
  } else {
    if (!numTwo.includes(dot)) {
      numTwo += dot;
    }
  }
  showHistory();
};

const handleLightDarkToggle = () => {
  console.log("toggling");
  if (body.classList.contains("darkMode")) {
    body.classList.remove("darkMode");
    body.classList.add("lightMode");
    console.log("dark to light");
    lightIMG.classList.add("noDisplay");
    lightIMG.classList.remove("Display");
    darkIMG.classList.remove("noDisplay");
    darkIMG.classList.add("Display");
    keypadButtonSelector.classList.add("yellowButton");
    keypadButtonSelector.forEach;
  } else {
    body.classList.remove("lightMode");
    body.classList.add("darkMode");
    console.log("light to dark");
    lightIMG.classList.remove("noDisplay");
    lightIMG.classList.add("Display");
    darkIMG.classList.add("noDisplay");
    darkIMG.classList.remove("Display");
  }
};

// event listeners - for each (multiple buttons)
numButton.forEach((button) => {
  button.addEventListener("click", (e: Event) => handleNumButton(button));
});
opButton.forEach((button) => {
  button.addEventListener("click", (e: Event) => handleOpButton(button));
});
// event listeners - singular buttons
equalsButton.addEventListener("click", (e: Event) =>
  handleEqualsButton(equalsButton)
);
clearButton.addEventListener("click", (e: Event) => handleClearButton());
dotButton.addEventListener("click", (e: Event) => handleDotButton());
lightDarkToggle.addEventListener("click", handleLightDarkToggle);
