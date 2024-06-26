function insertDataUser() {

    let fname = document.getElementById("fname").value;//קליטת שם המשתמש
    let email = document.getElementById("email").value;//קליטת האימייל
    let psw = document.getElementById("psw").value;//קליטת הסיסמא
    if(!fname||!email||!psw){
           alert ("לא מילאת את כל השדות!");
          return;

    }
    //בדיקת תקינות האימייל
    const emailNotValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!emailNotValid.test(email)) {
    alert("כתובת מייל לא תקינה ");
    return;
  }
 // בדיקה האם הסיסמה קטנה מ8 תווים
 if (psw.length < 8) {
    alert("סיסמא קצרה מ 8 תווים");
    return;
  }
 
    let details = {//הכנסת הנתונים והפיכתם לאובייקט
        name: fname,
        psw: psw,
       

    };
    let value = JSON.stringify(details);//valu המרת האובייקט למחרוזת בשם 
    localStorage.setItem(email, value);//email השמת המחרוזת בזיכרון תחת המפתח 
    
}
// let linkToSignUpPage = "../Instructions.html";
// let buttonnPass = document.getElementById("pass");
// buttonnPass.addEventListener("click", function () {
//     window.location.href = "..\html\Instructions.html";

// });