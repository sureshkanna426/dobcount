const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');





const myDOB ='2 aug 2021';


function countdown(){
    const myDate=new Date(myDOB);
    const currentDate=new Date();
    const totalseconds=(myDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;



    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=mins;
    secondsE1.innerHTML=seconds;

// console testing purpose //
    console.log(days,hours,mins,seconds);
}

//intial call//
countdown();
//repeat call//
setInterval(countdown,1000)