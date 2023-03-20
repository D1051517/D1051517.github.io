var countDownSeconds = 10;

var countDownElement = document.getElementById("countdown");

function updateCountDown(){
    countDownElement.innerHTML = countDownSeconds + "秒後請重新整理";
    countDownSeconds--;
    if(countDownSeconds < 0){
        countDownElement.innerHTML = "請重新整理";
    }
}

var countDownTimer = setInterval(updateCountDown, 1000);