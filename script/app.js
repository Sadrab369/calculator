const btns = document.querySelectorAll(
  "#calculator .number , #calculator .btnOperator"
);
const result = document.querySelector(".result");
const operator = document.querySelectorAll(
  "#calculator .operator:not(.resultNum)"
);
const clear = document.querySelector(".buttons .clear.row1");
const resultNum = document.querySelector(".buttons .resultNum");
const btnJam = document.getElementById("btnJam");
const btnTafrigh = document.getElementById("btnTafrigh");
const btnZarb = document.getElementById("btnZarb");
const btnTaghsim = document.getElementById("btnTaghsim");
const btnPoint = document.querySelector('#calculator .btnPoint');
const ts = document.querySelectorAll('.operator.row1');

// functions :

function calculateResult() {
  let expression = result.textContent;
  result.textContent = evaluateExpression(expression);
}

function appendCharacter(btn) {
  if (result.textContent.trim() === "0") {
    result.textContent = btn.textContent;
  } else {
    result.textContent = result.textContent + btn.textContent;
}
}

function handlePoint() {
    alert('در دست توسعه');
}

function clearDisplay() {
  result.textContent = "0";
}

function rowhandle(opr) {
  alert('در دست توسعه');
}

// تابع برای ارزیابی عبارات ریاضی
function evaluateExpression(expression) {
  let operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "×": function (a, b) {
      return a * b;
    },
    "÷": function (a, b) {
      return a / b;
    },
  };

  let tokens = expression.split(/([+\-×÷])/);

  // حل تقسیم و ضرب
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "×" || tokens[i] === "÷") {
      let operator = tokens[i];
      let a = parseFloat(tokens[i - 1]);
      let b = parseFloat(tokens[i + 1]);
      let result = operators[operator](a, b);

      tokens.splice(i - 1, 3, result);
      i -= 2;
    }
  }

  // حل جمع و تفریق
  let result = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    let operator = tokens[i];
    let operand = parseFloat(tokens[i + 1]);
    result = operators[operator](result, operand);
  }

  return result;
}

// EventListeners :

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendCharacter(btn);
  });
});

ts.forEach((opr) => {
  opr.addEventListener('click' , () => {
    rowhandle(opr);
  })
} )

clear.addEventListener("click", clearDisplay);

btnPoint.addEventListener('click' , handlePoint);

resultNum.addEventListener("click", calculateResult);
