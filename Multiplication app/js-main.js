
const num1=Math.ceil(Math.random() * 10);

const num2=Math.ceil(Math.random() * 10);

const QuestionEL=document.getElementById("question");

const formEl=document.getElementById("form")

QuestionEL.innerText=`what is ${num1} by ${num2}`;

const correctAns=num1*num2;

const inputEL=document.getElementById("input")

let score=JSON.parse(localStorage.getItem("score"));

const scoreEl=document.getElementById("score");

formEl.addEventListener("submit" , ()=>{
    const userAns = +inputEL.value;
    if(userAns === correctAns){

        score++


        updatelocalstoraged()
    }
    else{
        score--
        updatelocalstoraged()
    }
});
if(!score){
    score=0;
}

function updatelocalstoraged(){

    localStorage.setItem("score",JSON. stringify(score))

}
scoreEl.innerText=`Score: ${score}`