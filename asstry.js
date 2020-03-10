let quesList = [];
var questions = ["Apple" , "Orsnge" , "cherry"];
questions.forEach(fun);

function fun(item,index) {
    //element.setAttribute("id", value).innerHTML = item + "<br />";
    //document.getElementsByClassName("Ques").innerHTML += item + "<br />";
    document.getElementById(index).innerHTML = index + ":" + item + "<br />";
    console.log(index + '- ' + item);
}