const playbutton=document.getElementsByClassName('play')[0];
const resetbutton=document.getElementsByClassName('reset')[0];
const lapbutton=document.getElementsByClassName('lap')[0];
const second=document.getElementsByClassName('sec')[0];
const minute=document.getElementsByClassName('min')[0];
const centisecond=document.getElementsByClassName('msec')[0];
const laps=document.getElementsByClassName('laps')[0];
const clearButton=document.getElementsByClassName('lap-clear-all')[0];

const togglebutton =()=>{
    lapbutton.classList.remove('hidden');
   resetbutton.classList.remove('hidden');
}
let isplay=false;
let setmin=0;
let min=0;
let setCounter=0;
let centiCounter=0;
let sec;
let lapItem=0;
const play=()=>{
    if(!isplay){
        playbutton.innerHTML='Pause';
        min= setInterval(()=>{
           minute.innerHTML= `${++setmin} :`;
        },60000)
       sec= setInterval(()=>{
        if(setCounter===59){
            setCounter=0;
        }
  second.innerHTML= `${++setCounter} :`;
        },1000)
        centi= setInterval(()=>{
            if(centiCounter===100){
                centiCounter=0;
            }
            centisecond.innerHTML= `${++centiCounter} :`;
                  },10)
        isplay=true;
    }else{
        playbutton.innerHTML='Play';
        clearInterval(sec);
        clearInterval(min);
        clearInterval(centi);
        isplay=false;
    }
    togglebutton();
}
const reset=()=>{
    play();
    lapbutton.classList.add('hidden');
   resetbutton.classList.add('hidden');
   second.innerHTML="0 :"
   centisecond.innerHTML=" 0 ";
    minute.innerHTML=" 0 :";


}

const lape=()=>{
    const li=document.createElement('li');
    const number=document.createElement('span');
    const timeStamp=document.createElement('span');

    li.setAttribute('class','lap-item');
    number.setAttribute('class','number');
    timeStamp.setAttribute('class','time-stamp');
     number.innerText=`${++lapItem }`;
    timeStamp.innerHTML=`${setmin} : ${setCounter} :${centiCounter}`;
    li.append(number,timeStamp);
    laps.append(li);
    clearButton.classList.remove('hidden');
}

const clearonAll=()=>{
    laps.innerHTML="";
    laps.append(clearButton);
 clearButton.classList.add("hidden");

}
playbutton.addEventListener('click',play);
resetbutton.addEventListener('click',reset);
lapbutton.addEventListener('click',lape);
clearButton.addEventListener('click',clearonAll)



let countdown;

function startTimer() {
  const timeInput = document.getElementById("time-input");
  const minutesDisplay = document.getElementById("minutes");
  const secondsDisplay = document.getElementById("seconds");
  const startTime = new Date().getTime();
  const endTime = startTime + timeInput.value * 1000;
  
  countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endTime - now;
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    minutesDisplay.innerText = padNumber(minutes);
    secondsDisplay.innerText = padNumber(seconds);
    
    if (timeLeft < 0) {
      clearInterval(countdown);
      minutesDisplay.innerText = "00";
      secondsDisplay.innerText = "00";
      alert("Time's up!");
     
    }
  }, 1000);
}

function padNumber(num) {
  return num.toString().padStart(2, "0");
}
