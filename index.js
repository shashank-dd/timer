const shownum=document.querySelector(".timeshow")
const ddstar=document.querySelector(".hjkls")
const ddpau=document.querySelector(".hjklp")
const ddreset=document.querySelector(".hjklr")
const ddreca=document.querySelector(".hjklre")
const cast=document.querySelector(".cast")

let initime;
let internitytime=0;
let intervalkk;
let count=0

function gormtime(time){
   
    const hours=Math.floor(time/3600000)
    time%=3600000;
    const minutes=Math.floor(time/60000);
    time%=60000;
    const seconds=Math.floor(time/1000);
    const miliseconds=time%1000;
    return ` ${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${miliseconds.toString().padStart(3,"0")}`;

}
function jktime(){
    const currentTime=Date.now();
    const internitytime=currentTime-initime;
    shownum.textContent=gormtime(internitytime);
}
function pjktime(){
    initime=Date.now()-internitytime;
    intervalkk=setInterval(jktime, 10);

}
function hjktime(){
   clearInterval(intervalkk);
   internitytime=Date.now()-initime

}

function bbtime(){
    clearInterval(intervalkk)
    internitytime=0;
    shownum.textContent=gormtime(internitytime);
   

}
function lltime(){
     count++
  const recordTime=gormtime(internitytime)
  const recordElem=document.createElement("div");
  recordElem.textContent=`cast ${count}${recordTime}`;

  cast.append(recordElem)

}
ddstar.addEventListener('click',pjktime)
ddpau.addEventListener("click",hjktime)
ddreset.addEventListener("click",bbtime)
ddreca.addEventListener("click",lltime)