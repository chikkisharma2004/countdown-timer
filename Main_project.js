const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');

var interval = null;
var total=0;
let count=0;

totalValue=()=>{
    total= Number(hour.value)*3600 + Number(minute.value)*60 +Number(second.value);
}

alert("enter your time!!  set your goal!!");
Timer = ()=>{
    totalValue();
    total--;
    
    if(total>=0){
      var hr = Math.floor(total/3600);
      var mt = Math.floor((total/60)- (hr*60));
      var  sc = total - ((hr*3600)+ (mt*60));

      hour.value=hr;
      minute.value=mt;
      second.value=sc;

      disp.innerText="Timer";
    
      if(count<1){  
      if(total<11){
        
        new Audio('./femalVoice.mp3').play();
        count++;
    }
}

    else if(total==0) {
        disp.innerText="Time Over!!"
        new Audio('./coutdown.mp3').play(1);
        return;
    }
    }

}

// start from 10





start.addEventListener('click',()=>{
    clearInterval(interval);
    interval= setInterval(Timer,1100);
    // if(total<11){
    //     new Audio('./femalVoice.mp3').play();
    //     console.log(total)
    //     return;
    // }
    
    

    disp.innerText="Timer started !!";
});






reset.addEventListener('click',()=>{
    clearInterval(interval);

    hour.value =0;
    minute.value=0;
    second.value=0;


});