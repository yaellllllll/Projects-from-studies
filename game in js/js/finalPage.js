let summaryPoints
let nam = sessionStorage.getItem("userName");
let score1 = Number(sessionStorage.getItem('score1'));
let succussTries = Number(sessionStorage.getItem('succussTries'));
let scoreTries = Number(sessionStorage.getItem('scoreTries'));

summaryPoints = score1 - (scoreTries - succussTries) * 5;//חישוב הנקודות הסופי 
if (summaryPoints < 0) {
    summaryPoints = 0;
}
sessionStorage.setItem('finalScore', summaryPoints);

const summryText = `
<div id="summryText">
<h2>!!היה נחמד איתך ${nam}  היי </h2>
<h2> הניקוד הסופי שלך הוא: ${summaryPoints}</h2>
</div>
`


document.getElementById('summryText').innerHTML = summryText; 
