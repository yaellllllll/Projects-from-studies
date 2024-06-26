let linkToSignUpPage = "logIn.html"
function cheakingDataOfUser() {
    let email = document.getElementById("email").value;//קליטת האימייל
    sessionStorage.setItem("emailOfUser", email);
    let psw = document.getElementById("psw").value;//קליטת הסיסמא
    let stringToCompare = localStorage.getItem(email);//שליפת האובייקט המתאים מהזיכרון
    if (!email || !psw) {
        alert("לא מילאת את כל השדות!");
        return;
    }

    if (stringToCompare)//אם האובייקט לא ריק
    {
        let objectToCompare = JSON.parse(stringToCompare);
        let userName = objectToCompare.name;//כאן נשמר שם השחקן
        sessionStorage.setItem("userName", userName);
        if (objectToCompare.psw == psw)//אם הסיסמא שהוקשה זהה לסיסמא שבזיכרון
        { linkToSignUpPage = "./Instructions.html" }//פה נעביר אותו לעמוד של תחילת המשחק
        else//אם הסיסמא שגויה 
        {
            alert("הסיסמא שהקשת שגויה! בבקשה נסה שוב!");

        }
    }
    else//אם האובייקט ריק- כלומר לא קיים כזה מייל במאגר
    {
        //צריך להעביר לעמוד של ההרשמה, כיוון שאינו קיים במערכת
        linkToSignUpPage = "./signUp.html"

    }

}//פה המשתמש עובר לעמוד הנצרך
let buttonnPass = document.getElementById("pass");
buttonnPass.addEventListener("click", function () {
    window.location.href = linkToSignUpPage;

});