const Hour= document.getElementById("hour")
const Minute=document.getElementById("minute")
const Second=document.getElementById("second")
const Am=document.getElementById("ampm")

function updateclock(){
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    
    if(h>12){
        h =h-12;
        ampm= "PM";
    }
    
  h= h<10?"0"+h : h;
    Hour.innerHTML=h;
    Minute.innerHTML=m;
    Second.innerHTML=s;
    Am.innerHTML=ampm;
    setTimeout(() => {
        updateclock()
    }, 1000);
}

updateclock()