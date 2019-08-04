const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImg(number) {
  const image = new Image();
  image.src = `images/${number}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init();
