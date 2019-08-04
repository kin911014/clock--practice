const greetingForm = document.querySelector(".js-greetingForm");
const greetingInput = greetingForm.querySelector("input");
const greetingH4 = document.querySelector(".js-greetingH4");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(valueOfInput) {
  localStorage.setItem(USER_LS, valueOfInput);
}

function paintName(valueOfInput) {
  greetingForm.classList.remove(SHOWING_CN);
  greetingH4.classList.add(SHOWING_CN);
  greetingH4.innerText = `Nice to meet you,${valueOfInput}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintName(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingH4.classList.remove(SHOWING_CN);
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const loadedName = localStorage.getItem(USER_LS);
  if (loadedName === null) {
    askForName();
  } else {
    paintName(loadedName);
  }
}

function init() {
  loadName();
}

init();
