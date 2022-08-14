let hexArr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let generateButton = document.getElementById('colorButton').addEventListener('click', generateColors);
let backgroundColorDisplay = document.getElementById('output');

backgroundColorDisplay.innerText = colorString;

function generateColors(e) {
  let hexColor = '#';
  for(var i = 0; i < 6; i++) {
    hexColor += hexArr[getRandomNumber()];
  }
  backgroundColorDisplay.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexArr.length);
}


// function generateColors(e) {
//   for (var i = 0; i < 6; i++) {
//     let colorString = '#'
//     var randomIndex = Math.floor(Math.random() * 16);
//     var indexNumber = hexArr[randomIndex];
//     colorArr.push(indexNumber);
//     var colorArrNoCommas = colorArr.join('');
//     var colorString = colorArrNoCommas.toString();
//   }
//   var background = document.getElementById('background');
//   background.style.backgroundColor = colorString;
//   backgroundColorDisplay.innerText = colorString;
//   console.log(colorString);
// }

// function getRa
