const display = document.getElementById("display");
const historyBox = document.getElementById("history");
const historyList = document.getElementById("historyList");

let current = "";

function append(value) {
  if (display.innerText === "0") current = "";
  current += value;
  display.innerText = current;
}

function clearAll() {
  current = "";
  display.innerText = "0";
}

function calculate() {
  try {
    const result = eval(current);
    addHistory(current + " = " + result);
    current = result.toString();
    display.innerText = current;
  } catch {
    display.innerText = "Error";
  }
}

function toggleSign() {
  if (current) {
    current = (parseFloat(current) * -1).toString();
    display.innerText = current;
  }
}

function percent() {
  if (current) {
    current = (parseFloat(current) / 100).toString();
    display.innerText = current;
  }
}

function toggleHistory() {
  historyBox.style.display =
    historyBox.style.display === "block" ? "none" : "block";
}

function addHistory(text) {
  const li = document.createElement("li");
  li.innerText = text;
  historyList.prepend(li);
}
