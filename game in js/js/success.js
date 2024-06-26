
let score = document.getElementById('score');
let points = Number(sessionStorage.getItem('score1') - 10);;
let i = 0;




let flg = true;
function audio(flg) {
  if (flg) {
    let pressAudio = new Audio("../audio/claps.mp3");
    pressAudio.play();
  }
}

audio(flg);

function increasePoints() {
  i += 1;
  points += 1;
  score.innerText = points;


  animatePoints();
  if (i < 10) {
    setTimeout(increasePoints, 300);
  }
}

function animatePoints() {
  setTimeout(function () {
    score.style.fontSize = '48px';
    score.style.color = "aqua";
  }, 1000);
  score.style.color = "orange";
  setTimeout(() => {
    score.style.color = "black";
    score.style.fontSize = '45px';
  }, 500);
}
audio();
setTimeout(increasePoints, -1000);

