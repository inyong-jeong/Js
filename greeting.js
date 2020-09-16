const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello${text}`;
}
function loadName() {
  const currntUser = localStorage.getItem(USER_LS);
  if (currntUser === null) {
    // she is not
    ddd;
  } else {
    paintGreeting(currntUser);
  }
}

function init() {}

init();
