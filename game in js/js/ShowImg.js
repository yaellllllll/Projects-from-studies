
//הגרלת מספר לתמונה
function random() {
  let numImg = Math.floor(Math.random() * 3);
  return numImg;
}
let r = random();
localStorage.setItem("rndNumOfImg", r);
//הצגת התמונה על המסך
function showRandomPic(r) {

  let place = document.querySelector("#pic");
  let image = document.createElement("img");
  image.src = `../pic/${r}.jpg`;


  place.prepend(image);
}

showRandomPic(r);



function showChooseLevel() {
  let element = document.getElementById("chooseLevel");
  element.style.display = "block";

}


function removeImage() {
  let image = document.getElementById("pic");
  image.remove();
}
setTimeout(removeImage, 7000);
setTimeout(showChooseLevel, 7000);

// קליטת הרמה עי המשתמש 
let level = document.querySelectorAll('.button');
for (let i = 0; i < level.length; i++) {
  level[i].addEventListener('click', function () {
    console.log(this.id);
    localStorage.setItem("theLevel", this.id);// שמירת הרמה המבוקשת בזיכרון

  });
}



