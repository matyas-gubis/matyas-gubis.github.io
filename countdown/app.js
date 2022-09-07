let result = document.querySelector('h1');

showTime();
function showTime(){
    let today = new Date();
    let andras = new Date(2022, 08, 09, 22, 15, 0, 0);    
    let eredmeny = andras.getTime() - today.getTime(); 
    let datum = new Date(eredmeny)     
    let oneDay = 1000*60*60*24;
    let oneHour = 1000*60*60;
    let days = Math.floor(eredmeny / oneDay);
    // let hours = Math.floor((eredmeny / (oneHour)) - (days * 24));
    let hours = Math.floor((eredmeny-(days*oneDay))/oneHour)
    let minutes = Math.floor((eredmeny/60000)-(days*60*24)-(hours*60));
    let secs = Math.floor((eredmeny-(days*oneDay)-(hours*oneHour)-(minutes*60000))/1000);

    // result.innerHTML = `${datum.getDate()}&nbspnap ${datum.getHours()}&nbspóra ${datum.getMinutes()}&nbspperc és ${datum.getSeconds()}&nbspmp`;
    result.innerHTML = `${days}&nbspnap ${hours}&nbspóra ${minutes}&nbspperc és ${secs}&nbspmp`;
    
    if(days < 1){
        setColorRed();
    }   
    
    setInterval(showTime, 1000);
}

function setColorRed(){
    result.style.color = "red";          
    setInterval(setColorWhite, 500)
}
function setColorWhite(){
    result.style.color = "black";        
    setInterval(setColorRed, 500)
}  