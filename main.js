var countDownSeconds = 5;

var countDownElement = document.getElementById("countdown");

function updateCountDown(){
    countDownElement.innerHTML =   countDownSeconds + "秒後重新整理";
    countDownSeconds--;
}

var countDownTimer = setInterval(updateCountDown, 1000);