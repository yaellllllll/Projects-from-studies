


let nam = sessionStorage.getItem("userName");//משתנה המכיל את שם השחקן הנוכחי
let score1 = Number(sessionStorage.getItem('score1'));//משתנה המכיל את סכום הנקודות המצטבר
let succussTries = Number(sessionStorage.getItem('succussTries'));//משתנה המכיל את מספר הנסיונות הנכונים
let scoreTries = Number(sessionStorage.getItem('scoreTries'));//משתנה המכיל את מספר הנסינות בסך הכל

const detailsTitle = `
<div id="detailsTitle" >
 <h2 class="title"> שם השחקן: ${nam}</h2>
<h2 class="title">ניקוד כולל: ${score1}</h2>
<h2 class="title"> מספר נסיונות: ${succussTries}/${scoreTries}</h2>
</div>
`

document.getElementById('title').innerHTML = detailsTitle; 
