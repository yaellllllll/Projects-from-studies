
let arrImges = [4];//אתחול מערך השאלות
let numImg//אתחול משתנה למספר התמונה
let rndIndexOfQues//אתחול משתנה למספר השאלה המוגרל
let level
let linkPage = "../html/successQuestion.html"

// 1השאלות של התמונה
//שאלות רמה קלה
let pic1_easy_que1 = {
  question: "כמה ילדים בתמונה?",
  answers: ["שנים עשר", "ארבע", "שמונה"],
  right_ans: 2 // אינדקס התשובה הנכונה 
};
let pic1_easy_que2 = {
  question: "כמה גלגלים נראים בתמונה?",
  answers: ["שניים", "ארבעה", "שלושה"],
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic1_easy_que3 = {
  question: "כמה  עצים מופיעים בתמונה?",
  answers: ["אחד", "שניים", "חמישה"],
  right_ans: 1 // אינדקס התשובה הנכונה 
};

//שאלות רמה בינונית
let pic1_mid_que1 = {
  question: "כמה אוהלים מופיעים בתמונה?",
  answers: ["שלושה", "אחד", "חמישה"],
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic1_mid_que2 = {
  question: "באיזה צבע הסוס שבתמונה?",
  answers: ["חום", "סגול", "שחור"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
let pic1_mid_que3 = {
  question: "באיזה צבע ההרים שברקע?",
  answers: ["ירוק", "חום", "סגול"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};
//שאלות רמה קשה
let pic1_high_que1 = {
  question: "כמה עננים יש בסך הכל בתמונה?",
  answers: ["תשעה", "שניים", "ארבעה"],
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic1_high_que2 = {
  question: "באיזה צבע הוילון שבאוהל הראשון משמאל?",
  answers: ["שחור", "לבן", "אדום"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};
let pic1_high_que3 = {
  question: " כמה בנות מופיעות בתמונה?",
  answers: ["אפס", "שלוש", "חמש"],
  right_ans: 1 // אינדקס התשובה הנכונה 
};
// 2השאלות של התמונה
//שאלות רמה קלה

let pic2_easy_que1 = {
  question: "כמה חלונות יש בחדר?",
  answers: ["שניים", "אחד", "ארבעה"],//תשובות אפשריות
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic2_easy_que2 = {
  question: "באיזה צבע הכרית בתמונה?",
  answers: ["סגול", "צהוב", "כתום"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};
let pic2_easy_que3 = {
  question: "מה צבע המכנסיים של הילד?",
  answers: ["ירוק", "כחול", " אדום"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};

//שאלות רמה בינונית
let pic2_mid_que1 = {
  question: "כמה מגירות יש בשידה?",
  answers: ["שתיים", "שלוש", "ארבע"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};
let pic2_mid_que2 = {
  question: "כמה תמונות תלויות על הקיר?",
  answers: ["שלוש", "שניים", "אחת"],//תשובות אפשריות
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic2_mid_que3 = {
  question: "מה נמצא על השידה בתמונה?",
  answers: ["כוס", "שעון", "מנורה"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};
//שאלות רמה קשה
let pic2_high_que1 = {
  question: "היכן מופיעה הנעל הנוספת של הילד",
  answers: ["מתחת לשולחן", "בין השידה לסלסילה", "על המיטה"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
let pic2_high_que2 = {
  question: "איזה מבין הפריטים הבאים לא מופיע בתמונה?",
  answers: ["מגפיים", "רכבת", "כוס"],//תשובות אפשריות
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic2_high_que3 = {
  question: " כמה כלי כתיבה מופיעים בתמונה?",
  answers: ["שמונה", "שלושה", "שניים"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
// 3השאלות של התמונה
//שאלות רמה קלה

let pic3_easy_que1 = {
  question: "מה הילד מחזיק ביד?",
  answers: ["בלון", "עפיפון", "כדור"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
let pic3_easy_que2 = {
  question: "באיזה צבע הפרחים בתמונה?",
  answers: ["אדום", "צהוב", "כתום"],//תשובות אפשריות
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic3_easy_que3 = {
  question: "כמה פרות יש בתמונה?",
  answers: ["שתיים", "שבע", " ארבע"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};

//שאלות רמה בינונית
let pic3_mid_que1 = {
  question: "מה הילד מכניס לפה?",
  answers: ["טופי", "ענבים", "דובדבנים"],//תשובות אפשריות
  right_ans: 2 // אינדקס התשובה הנכונה 
};
let pic3_mid_que2 = {
  question: "כמה ציפורים בתמונה",
  answers: ["שלוש", "שניים", "אחת"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
let pic3_mid_que3 = {
  question: "באיזה צבעים העפיפון?",
  answers: ["כחול וירוק", "סגול וורוד", "סגול וכתום"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
//שאלות רמה קשה
let pic3_high_que1 = {
  question: "כמה סוגי בעלי חיים מופיעים בתמונה?",
  answers: ["שישה ", "שלושה", "שניים"],//תשובות אפשריות
  right_ans: 0 // אינדקס התשובה הנכונה 
};
let pic3_high_que2 = {
  question: "כמה שבשבות בתמונה?",
  answers: ["חמש", "שבע", "שתיים"],//תשובות אפשריות
  right_ans: 1 // אינדקס התשובה הנכונה 
};
let pic3_high_que3 = {
  question: " אילו עצי פרי רואים בתמונה?",
  answers: ["ענבים", "אפרסק", "תמרים"],//תשובות אפשריות
  right_ans: 0 // אינדקס התשובה הנכונה 
};
//האובייקטים של התמונה
let pic_1 = {
  name: "pic1",
  easy: [pic1_easy_que1, pic1_easy_que2, pic1_easy_que3],
  mid: [pic1_mid_que1, pic1_mid_que2, pic1_mid_que3],
  high: [pic1_high_que1, pic1_high_que2, pic1_high_que3]
};
let pic_2 = {
  name: "pic2",
  easy: [pic2_easy_que1, pic2_easy_que2, pic2_easy_que3],
  mid: [pic2_mid_que1, pic2_mid_que2, pic2_mid_que3],
  high: [pic2_high_que1, pic2_high_que2, pic2_high_que3]
};
let pic_3 = {
  name: "pic3",
  easy: [pic3_easy_que1, pic3_easy_que2, pic3_easy_que3],
  mid: [pic3_mid_que1, pic3_mid_que2, pic3_mid_que3],
  high: [pic3_high_que1, pic3_high_que2, pic3_high_que3]
};
let pic_4 = {
  name: "pic1",
  easy: [pic1_easy_que1, pic1_easy_que2, pic1_easy_que3],
  mid: [pic1_mid_que1, pic1_mid_que2, pic1_mid_que3],
  high: [pic1_high_que1, pic1_high_que2, pic1_high_que3]
};


function showQuestion() {
  let textOfQuestion

  arrImges = [pic_1, pic_2, pic_3, pic_4];
  numImg = parseInt(localStorage.getItem("rndNumOfImg"));//מספר התמונה המוגרל

  rndIndexOfQues = Math.floor(Math.random() * 3); // הגרלת מספר לשאלה

  level = localStorage.getItem("theLevel");
  textOfQuestion = arrImges[numImg][level][rndIndexOfQues].question




  document.getElementById("question").innerHTML = textOfQuestion;

}

showQuestion();
function showAnswers() {
  let answersContainer = document.getElementById("answers");
  for (let i = 0; i < 3; i++) {
    let rdb = document.createElement("input");
    rdb.setAttribute("type", "radio");

    rdb.value = i;
    rdb.id = i;
    rdb.name = "answer";
    let leb = document.createElement("label");
    leb.for = i;
    leb = arrImges[numImg][level][rndIndexOfQues].answers[i];
    answersContainer.append(rdb);
    rdb.style.display = "flex";
    rdb.style.flexDirection = "column";
    answersContainer.append(leb);

  }

}
showAnswers();
function getAndCheakAnswer() {
  let selectedAnswer;
  let a = document.createElement("a");


  let radioButtons = document.getElementsByName("answer");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedAnswer = radioButtons[i].value;
      break;
    }
  }

  if (selectedAnswer == arrImges[numImg][level][rndIndexOfQues].right_ans)//אם התשובה שנבחרה- נכונה
  {
    let pressAudio = new Audio("../audio/claps.mp3");
    pressAudio.play();
    sessionStorage.setItem('score1', score1 + 10);
    sessionStorage.setItem('succussTries', succussTries + 1);
    sessionStorage.setItem('scoreTries', scoreTries + 1);

  }
  else {
    let pressAudio = new Audio("../audio/claps.mp3");
    pressAudio.play();
    sessionStorage.setItem('scoreTries', scoreTries + 1);

    linkPage = "../html/failedQuestion.html";
  }
}

// מעבר לדף ניצחון או כישלון 

let buttonn = document.getElementById("writeOrWrong");
buttonn.addEventListener("click", function () {
  window.location.href = linkPage;
});









