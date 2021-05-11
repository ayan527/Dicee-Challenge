function randomNumberGenerator() {
  const max = 6, min = 1;
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function imageUrlGenerator(number) {
  return "images/dice" + number + ".png";
}

function resultGenerator(result1, result2) {
  let result = '';

  if(result1 > result2) {
    result = '🏆 Player 1 wins';
  } else if(result1 < result2) {
    result = 'Player 2 wins 🏆';
  } else {
    result = 'Draw!';
  }

  return result;
}

const randomOne = randomNumberGenerator();
const randomTwo = randomNumberGenerator();

const imageURLOne = imageUrlGenerator(randomOne);
const imageURLTwo = imageUrlGenerator(randomTwo);

const resultString = resultGenerator(randomOne, randomTwo);

document.querySelector(".img1").setAttribute("src", imageURLOne);
document.querySelector(".img2").setAttribute("src", imageURLTwo);
document.querySelector("h1").innerHTML = resultString;