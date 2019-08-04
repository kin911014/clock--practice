const greetingFormCtn = document.querySelector(".js-greetingFormCtn");
const greetingForm = greetingFormCtn.querySelector(".js-greetingForm");
const greetingInput = greetingForm.querySelector("input");

const greetingH4Ctn = document.querySelector(".js-greetingH4Ctn");
const greetingH4 = greetingH4Ctn.querySelector("h4");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(valueOfInput) {
  localStorage.setItem(USER_LS, valueOfInput);
}

function paintName(valueOfInput) {
  greetingFormCtn.classList.remove(SHOWING_CN);
  greetingH4Ctn.classList.add(SHOWING_CN);
  greetingH4.innerText = `Nice to meet you,${valueOfInput}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintName(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingFormCtn.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const loadedName = localStorage.getItem(USER_LS);
  if (loadedName === null) {
    askForName();
  }
  paintName(loadedName);
}

function init() {
  loadName();
}

init();
