const hourEl=document.getElementById("hooures");
const minutesEl=document.getElementById("mintutes");
const secondEl=document.getElementById("Second");
const AmpmEl=document.getElementById("am_pm");
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="am";
    if(h>12){
        h=h-12;
        ampm="pm"
    };
    h=h<10 ?"0"+h:h;
    hourEl.innerText=h;
    minutesEl.innerText=m;
    secondEl.innerText=s;
    AmpmEl.innerText=ampm;
}
updateClock();