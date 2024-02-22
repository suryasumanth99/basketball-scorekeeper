let button1=document.getElementById("btn1");
let button2=document.getElementById("btn2");
let button3=document.getElementById("btn3");
let homeScore=document.getElementById("hm-score");
let guestScore=document.getElementById("gu-score")
let home=0;
let guest=0;
function bt1(){
    home++;
    console.log(home);
    homeScore.innerText=home;
    
}

function bt2(){
    
    home+=2;
    console.log(home);
    homeScore.innerText=home;
}

function bt3(){
    
    home+=3;
    console.log(home);
    homeScore.innerText=home;
}

function bt4(){
    guest++;
    console.log(guest);
    guestScore.innerText=guest;
    
}

function bt5(){
    
    guest+=2;
    console.log(guest);
    guestScore.innerText=guest;
}

function bt6(){
    
    guest+=3;
    console.log(guest);
    guestScore.innerText=guest;
}