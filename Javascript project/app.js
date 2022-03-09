function populate(){
    if(quiz.isEnded()){
        //show score;

    }
    else{
        //show questions
        var element=document.getElementById("question");
        element.innerHTML=quiz.getquestionIndex().text;
    }
}




var questions=[
new Question("Which one is not an object oriented programming Language?",['java','c','c#','c++'],'c')
new Question("Which Language is used for styling web pages?",['HTML','XML','CSS','JQUERY'],'CSS')
new Question("There are ------ components in OOP?",['2','4','5','6'],'4')
new Question("Which  Language is used for Web apps?",['javascript','PHP','Python','All'],'All')
]
var quiz= Quiz(questions);
populate();