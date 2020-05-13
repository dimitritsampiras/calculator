export default function calculate(state, button) {
  const buttonType = id(button);
  if (buttonType === "num") return numCalc(state, button);
  if (buttonType === "operator") return operCalc(state, button);
  if (buttonType === "equal") return equalCalc(state, button);
  if (buttonType === "percent") return percent(state);
  if (buttonType === "clear") return clear();
}

function id(button) {
  const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const OPS = ["+", "-", "*", "/", "-"];

  if (NUMS.includes(button)) return "num";
  if (OPS.includes(button)) return "operator";
  if (button === "=") return "equal";
  if (button === "%") return "percent";
  if (button === "C") return "clear";
}

function numCalc(state, button) {
  let { display, equation } = state;
  
  if (equation.match(/[0-9\.]$/) && !equation.includes("=")) {
    if (equation.match(/[+\-*\/]/) == null) {
      let val = equation + button;
      console.log("val: " + val);
      
      return {
        display: val,
        equation: val,
      };
    } else {
      console.log("val: 1");
      return {
        display: display + button,
        equation: equation + button,
      };
    }
  } else if (equation.match(/[+\-*\/]$/)) {
    let val = equation + button;
    console.log("val: " + val);
    return {
      display: button,
      equation: val,
    };
  } else if ((display === "0" && button !== "0") || equation.includes("=")) {
    console.log("here");
    console.log(display);
    console.log(equation);
    console.log(button);
    return {
      display: button,
      equation: button,
    };
  }
}

function operCalc(state, button) {
  let { display, equation } = state;
  if (equation.includes("=")) {
    let val = display;
    val += button;
    return {
      equation: val,
    };
  } else {
    if (equation != "" && equation.match(/[*\-\/+]$/) == null) {
      let val = equation;
      val += button;
      return {
        equation: val,
      };
    } else if (equation.match(/[*\-\/+]$/) != null) {
      let val = equation.substring(0, val.length - 1);
      val += button;
      return {
        equation: val,
      };
    }
  }
}

function equalCalc(state, button) {
  let { display, equation } = state;
  if (equation.includes("=")) {
    let val = `${display} = ${display}`;
    return {
      equation: val,
    };
  } else if (
    equation != "" &&
    equation.match(/[+\-*\/]/) != null &&
    equation.match(/[+\-*\/]$/) == null
  ) {
    let result = Number.isInteger(eval(equation))
      ? eval(equation)
      : parseFloat(eval(equation).toFixed(5));
    let val = equation;
    val += ` = ${result}`;
    return {
      display: result,
      equation: val,
    };
  }
}

function percent(state) {
  let { display, equation } = state;
  return {
    display: eval(`${display} * 0.01`),
    equation: equation
  }
}

function clear() {
  return {
    display: "0",
    equation: ""
  }
}