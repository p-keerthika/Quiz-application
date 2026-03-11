let answered = false;
const quiz = [
{
question:"Which language is mainly used for frontend web development?",
answers:["Python","JavaScript","Java","C++"],
correct:1
},
{
question:"HTML stands for?",
answers:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyperlinks Text Mark Language",
"Home Tool Markup Language"],
correct:0
},
{
question:"Which tag is used to link CSS?",
answers:["script","style","link","css"],
correct:2
},
{
question:"Which company developed JavaScript?",
answers:["Microsoft","Google","Netscape","Apple"],
correct:2
},
{
question:"Which symbol is used for id in CSS?",
answers:[".","#","*","&"],
correct:1
},
{
question:"Bootstrap is mainly used for?",
answers:["Database","Styling UI","Backend","Hosting"],
correct:1
},
{
question:"Which HTML tag is used for images?",
answers:["img","image","pic","src"],
correct:0
},
{
question:"Which property changes text color in CSS?",
answers:["font-color","color","text-style","Background-color"],
correct:1
},
{
question:"Which keyword declares variable in JavaScript?",
answers:["var","let","const","All"],
correct:3
},
{
question:"Which method prints output in console?",
answers:["console.log()","print()","log.console()","display()"],
correct:0
},
{
question:"Which HTML tag creates a button?",
answers:["btn","button","input","click"],
correct:1
},
{
question:"Which CSS property controls font size?",
answers:["font-weight","font-size","text-size","size"],
correct:1
},
{
question:"Which is not a programming language?",
answers:["HTML","Python","Java","C++"],
correct:0
},
{
question:"Which attribute provides link in HTML?",
answers:["src","href","link","url"],
correct:1
},
{
question:"Which operator is used for comparison?",
answers:["=","==","===","Both 2 and 3"],
correct:3
},
{
question:"Which JS method converts JSON to object?",
answers:["JSON.parse()","JSON.stringify()","JSON.object()","JSON.convert()"],
correct:0
},
{
question:"Which storage keeps data permanently in browser?",
answers:["sessionStorage","localStorage","cookies","All"],
correct:1
},
{
question:"Which tag is used for heading?",
answers:["h1","heading","head","title"],
correct:0
},
{
question:"Which framework is used for frontend?",
answers:["React","Laravel","Django","Flask"],
correct:0
},
{
question:"Which HTML tag is used for list?",
answers:["ul","li","Both","table"],
correct:2
},
{
question:"Which CSS property makes text bold?",
answers:["font-weight","font-style","text-bold","bold"],
correct:0
},
{
question:"Which symbol is used for class selector in CSS?",
answers:["#",".","*","&"],
correct:1
},
{
question:"Which JavaScript method shows popup message?",
answers:["alert()","prompt()","confirm()","All"],
correct:3
},
{
question:"Which HTML tag is used for table row?",
answers:["tr","td","th","table"],
correct:0
},
{
question:"Which HTML element is used for paragraph?",
answers:["p","para","text","pg"],
correct:0
},
{
question:"Which CSS property adds space inside border?",
answers:["margin","padding","border-space","gap"],
correct:1
},
{
question:"Which JavaScript keyword is used for constant variable?",
answers:["var","let","const","constant"],
correct:2
},
{
question:"Which method adds element to array?",
answers:["push()","pop()","shift()","remove()"],
correct:0
},
{
question:"Which HTML tag is used for line break?",
answers:["break","br","lb","hr"],
correct:1
},
{
question:"Which property aligns text center?",
answers:["text-align","align","center","position"],
correct:0
},
{
question:"Which JavaScript loop runs at least once?",
answers:["for","while","do...while","foreach"],
correct:2
},
{
question:"Which HTML tag is used for hyperlink?",
answers:["a","link","href","url"],
correct:0
},
{
question:"Which CSS property controls background color?",
answers:["bgcolor","background","background-color","color"],
correct:2
},
{
question:"Which JavaScript function converts string to integer?",
answers:["parseInt()","toString()","Number()","parseFloat()"],
correct:0
},
{
question:"Which HTML tag is used for unordered list?",
answers:["ul","ol","li","list"],
correct:0
},
{
question:"Which CSS property creates rounded corners?",
answers:["border-style","border-radius","border-round","corner"],
correct:1
},
{
question:"Which JavaScript method removes last array element?",
answers:["pop()","push()","shift()","remove()"],
correct:0
},
{
question:"Which HTML tag is used for form?",
answers:["form","input","submit","field"],
correct:0
},
{
question:"Which CSS property sets element width?",
answers:["width","size","length","element-width"],
correct:0
},
{
question:"Which JavaScript symbol is used for comments?",
answers:["//","<!-- -->","#","**"],
correct:0
}
];

let currentQuestion = 0;
let score = 0;
let time = 30;
let timer;

function loadQuestion(){

answered = false;

clearInterval(timer);
time = 30;

document.getElementById("timer").innerText = "Time: " + time;

timer = setInterval(()=>{

time--;

document.getElementById("timer").innerText = "Time: " + time;

if(time === 0){
nextQuestion();
}

},1000);

let q = quiz[currentQuestion];

document.getElementById("questionNumber").innerText =
`Question ${currentQuestion+1} of ${quiz.length}`;

document.getElementById("question").innerText = q.question;

let answersHTML = "";

q.answers.forEach((ans,index)=>{

answersHTML += `
<button class="btn btn-outline-dark answer-btn"
onclick="selectAnswer(${index}, this)">
${ans}
</button>
`;

});

document.getElementById("answers").innerHTML = answersHTML;

updateProgress();

}

function selectAnswer(index, button){

if(answered) return;

answered = true;

let correct = quiz[currentQuestion].correct;

let buttons = document.querySelectorAll(".answer-btn");

buttons.forEach(btn => btn.disabled = true);

if(index === correct){

button.classList.remove("btn-outline-dark");
button.classList.add("btn-success");

score++;

}else{

button.classList.remove("btn-outline-dark");
button.classList.add("btn-danger");

buttons[correct].classList.remove("btn-outline-dark");
buttons[correct].classList.add("btn-success");

}

}

document.addEventListener("keydown", function(e){

if(e.key === "Enter" && answered){

nextQuestion();

}

});

function nextQuestion(){

currentQuestion++;

if(currentQuestion < quiz.length){

loadQuestion();

}else{

showResult();

}

}

function updateProgress(){

let percent = (currentQuestion / quiz.length) * 100;

document.getElementById("progressBar").style.width = percent + "%";

}

function showResult(){

clearInterval(timer);

document.querySelector(".card").classList.add("d-none");

document.getElementById("resultBox").classList.remove("d-none");

document.getElementById("score").innerText =
score + " / " + quiz.length;

let message = "";

if(score === quiz.length){

message = "🎉 Congratulations! Perfect Score!";

}else if(score >= quiz.length * 0.75){

message = "👏 Great Job! Excellent Performance!";

}else if(score >= quiz.length * 0.5){

message = "🙂 Good Attempt! Keep Practicing.";

}else{

message = "📚 Don't worry! Try Again.";

}

document.getElementById("resultMessage").innerText = message;

}

function restartQuiz(){

currentQuestion = 0;
score = 0;

document.querySelector(".card").classList.remove("d-none");

document.getElementById("resultBox").classList.add("d-none");

loadQuestion();

}

loadQuestion();