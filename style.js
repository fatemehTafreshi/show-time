let clock=document.getElementById('clock');
let daysOfWeek=document.getElementById('daysOfWeek');
let time = document.getElementById('time');
let date = new Date();
let day=date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let meridian = "AM";


function showMsg() {
 let msg;
  if(hour>=5 && hour <12)
    msg="Good Morning!";
  else if(hour>=12 && hour<=14)
    msg="Good Noon!";
  else if(hour>14 && hour<=19)
    msg="Good Afternoon!";
  else if(hour>19 && hour<=20)
    msg="Good Evening!";
  else
    msg="Good Night!";
  daysOfWeek.innerHTML="<br/>";
  daysOfWeek.innerText+=msg;
  daysOfWeek.innerHTML+="<br/>";

  switch(day){
    case 0:clock.innerText+="Today is Sunday :)";break;
    case 1:clock.innerText+="Today is Monday :)";break;
    case 2:clock.innerText+="Today is Tuesday :)";break;
    case 3:clock.innerText+="Today is Wednesday :)";break;
    case 4:clock.innerText+="Today is Thursday :)";break;
    case 5:clock.innerText+="Today is Friday :)";break;
    case 6:clock.innerText+="Today is Saturday :)";break;
  }

  daysOfWeek.innerHTML+="<br/>";
}

function showClock(){
  if (hour >= 12) {
    meridian = "PM";
    if (hour > 12)
      hour -= 12;
  }
  if (minute < 10)
    minute = "0" + minute;

  if (second < 10)
    second = "0" + second;
  
  let timeStr=`${hour}:${minute}:${second}  ${meridian}`;
  time.innerHTML = timeStr;
  
}

showMsg();
showClock();

clock.appendChild(time);   

setInterval( update , 1000);


function update(){   
  let now=new Date();
  hour=now.getHours();
  minute=now.getMinutes();
  second=now.getSeconds();

  if (hour >= 12) {
    meridian = "PM";
    if (hour > 12)
      hour -= 12;
  }
  if (minute < 10)
    minute = "0" + minute;

  if (second < 10)
    second = "0" + second;
  
  let timeStr=`${hour}:${minute}:${second}  ${meridian}`;
  
  time.innerHTML = timeStr; 
  
}