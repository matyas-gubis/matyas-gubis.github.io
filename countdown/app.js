let result = document.querySelector('h1');

showTime();
function showTime(){
    let today = new Date();
    let andras = new Date(2022, 09, 08, 22, 15, 0, 0);
    let eredmeny = andras.getTime() - today.getTime(); 
    let datum = new Date(eredmeny)      
    result.innerHTML = `${datum.getDate()}&nbspnap ${datum.getHours()-1}&nbspóra ${datum.getMinutes()}&nbspperc és ${datum.getSeconds()}&nbspmp`;

    setInterval(showTime, 1000);

}