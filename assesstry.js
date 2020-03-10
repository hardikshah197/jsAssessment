// function createQuestion(ques) {
//         return {
//             question: ques,
//             ans : ques.split('#')[""],
//             speak() {console.log("Answer for the ${ques} is ${ans}");}
//         }
// }
let quesList = [];
var questions = ["Apple" , "Orsnge" , "cherry"];
questions.forEach(Writefunc);

function Writefunc(item, index) {
    // questions.forEach((ques) => {
    //     quesList.push(createQuestion(ques));
        
    // });
    // quesList.forEach(() => {
    //     document.getElementById("Ques1").innerHTML=quesList;
    // });
    document.getElementById("Id"+index).innerHTML += index + ":" + item + "<br />"
    console.log(item+"  "+index);
}
