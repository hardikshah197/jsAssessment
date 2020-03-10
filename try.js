function createQuestion(ques) {
        return {
            question: ques,
            ans : ques.split('#')[""],
            speak() {console.log("Answer for the ${ques} is ${ans}");}
        }
}
let quesList = [];
var questions = ["Apple" , "Orsnge" , "cherry"];
questions.forEach(fun);

    function fun(item,index)  {
        quesList.push(createQuestion(item));
        fun1(item,index);
    }
    function fun1(item,index) {
        document.getElementById("Ques1").innerHTML = item + "   "+ index+ "<br/>";
    } 