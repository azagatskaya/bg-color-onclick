window.onload = function () {
  let blocks = document.getElementsByClassName("color__block");
  let color = null;
  for (const elem of blocks) {
    color = getRandomColor();
    setRandomColor(elem, color);
  }
};

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function setRandomColor(elem, color) {
  elem.style.backgroundColor = color;
}

function changeColor(elem) {
  const currentColor = elem.style.backgroundColor;
  const color = getRandomColor();
  elem.style.backgroundColor =
    color !== currentColor ? color : getRandomColor();
}

function rightPic() {
  let pic = document.getElementsByClassName("slider__picture")[0];
  getPictureIndex(pic);
  if (index > 4) {
    index = 1;
  } else {
    index++;
  }
  changePicture(pic, index);
}

function leftPic() {
  let pic = document.getElementsByClassName("slider__picture")[0];
  getPictureIndex(pic);
  if (index < 2) {
    index = 5;
  } else {
    index--;
  }
  changePicture(pic, index);
}

function getPictureIndex(pic) {
  let startIndPos = pic.src.indexOf("student") + 7;
  let endIndPos = pic.src.length - 3;
  return (index = Number(pic.src.slice(startIndPos, endIndPos)));
}

function changePicture(pic, index) {
  let newPic = "./images/student" + index + ".png";
  pic.src = newPic;
}
