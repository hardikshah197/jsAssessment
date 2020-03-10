// arrobj = {
//     0:"Question-1",
//     1:"Question-2",
//     2:"Question-3"
// };
// var  arr=[];

// function ques () {
//     arr=Array.from(arrobj);
//     arr.push("hi is this an array now??");
//     return arr.join(' ');
// }
// var arr1=ques();
// arr.forEach( (item,index) => {
//     console.log(item+'  '+index);
// });

const create = function(a,b) { 
    const arr= Array.from(arguments);  
    arr.push("Question-3");  
return arr.join('  '); }  
var arr1 = create("question-1","Question-2");