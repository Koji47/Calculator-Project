// global variables declared for use in functions
let numOne = "";
let numTwo = "";
let op = "";
let negatives = "";

// generic
//query selectors
const numButton = document.querySelectorAll<HTMLButtonElement>(".keypad__num");
const opButton = document.querySelectorAll<HTMLButtonElement>(".keypad__op");
const equalsButton = document.querySelector<HTMLButtonElement>(".keypad__equals");
const clearButton = document.querySelector<HTMLButtonElement>(".keypad__clear");
const deleteButton = document.querySelector<HTMLButtonElement>(".keypad__delete");
const dotButton = document.querySelector<HTMLButtonElement>(".keypad__dot");
const displayCalculation = document.querySelector<HTMLElement>(".screen__sum");
const displayOutput = document.querySelector<HTMLElement>(".screen__output");
const lightDarkToggle = document.querySelector<HTMLButtonElement>(".navbar__lightdark");
const body = document.querySelector<HTMLElement>("body");
const lightIMG = document.querySelector<HTMLImageElement>("#light");
const darkIMG = document.querySelector<HTMLImageElement>("#dark");
const screenSelector = document.querySelector<HTMLDivElement>(".screen");
const keypadButtonSelector = document.querySelectorAll<HTMLButtonElement>(".keypad__buttons");

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
  
    if (op === "") {
      numOne += selectedNum;
    } else {
      numTwo += selectedNum;
    }
  showHistory();
  // if (op === "-" && selectedNum === "") {                                 //attempt at fixing negatives 
  //   numOne += selectedNum;
  //   return (op = "");
  // } else if (op === "") {
  //   // if numOne is empty and the selected number is "-"
  //   if (numOne === "" && selectedNum === "-") {
  //     // add the negative sign to the empty numOne
  //     numOne += selectedNum;
  //     op = "";
  //   } else if (numOne !== "" || (numOne === "" && selectedNum !== "-")) {
  //     numOne += selectedNum;
  //   }
  // } else {
  //   // if numTwo is empty and the selected number is "-"
  //   if (numTwo === "" && selectedNum === "-") {
  //     // Handle negative sign at the beginning of numTwo
  //     numTwo += selectedNum;
  //     op = "";
  //   } else if (numTwo !== "" || (numTwo === "" && selectedNum !== "-")) {
  //     numTwo += selectedNum;
  //   }

  }
// event handler - operator
const handleOpButton = (button: HTMLButtonElement) => {
  const selectedOp = button.innerText;
  op = selectedOp;
  // if (numOne === "-" && numTwo === "") {                                   //attempt at fixing negatives 
  //   op = selectedOp;
  //   return;
  // }
  showHistory();
};

// event handler - equals
const handleEqualsButton = () => {
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

// event handler - dot
const handleDeleteButton = () => {
  if (op === "") {
    if (numTwo !== "") {
      numTwo = numTwo.slice(0, -1);
    } else if (numOne !== "") {
      numOne = numOne.slice(0, -1);
    }
  } else if (numTwo !== "") {
    numTwo = numTwo.slice(0, -1);
  } else {
    op = "";
  }
  showHistory();
};

const handleLightDarkToggle = () => {
  if (body.classList.contains("darkMode")) {            //checks if already in dark mode
    body.classList.remove("darkMode");                  //removes tags associated to dark mode
    lightIMG.classList.remove("Display");
    darkIMG.classList.remove("noDisplay");
    body.classList.add("lightMode");                    //adds tags associated to light mode
    lightIMG.classList.add("noDisplay");
    darkIMG.classList.add("Display");
    keypadButtonSelector.forEach((button) => {
      button.classList.add("yellowButton");
    });
  } else {                                              //else - already in light mode...
    body.classList.remove("lightMode");                 //removes tags associated to light mode
    lightIMG.classList.remove("noDisplay");
    darkIMG.classList.remove("Display");
    body.classList.add("darkMode");                     //adds tags associated to dark mode
    lightIMG.classList.add("Display");
    darkIMG.classList.add("noDisplay");
    keypadButtonSelector.forEach((button) => {
      button.classList.remove("yellowButton");
    });
  }
};

// event listeners - for each (multiple buttons)
numButton.forEach((button) => {button.addEventListener("click", () => handleNumButton(button));});
opButton.forEach((button) => {button.addEventListener("click", () => handleOpButton(button));});
// event listeners - singular buttons
equalsButton.addEventListener("click", () => handleEqualsButton());
clearButton.addEventListener("click", () => handleClearButton());
dotButton.addEventListener("click", () => handleDotButton());
deleteButton.addEventListener("click", handleDeleteButton);
lightDarkToggle.addEventListener("click", handleLightDarkToggle);
