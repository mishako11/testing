const BODY = document.querySelector("body");
const MAIN = document.querySelector("main");
const CLOCK = document.querySelector("#clock");
const CREDIT = document.querySelector("#credit");

function formatTime(int) {
    return ("0" + int).slice(-2);
}

function setTime() {
    let date = new Date();
    CLOCK.querySelector("span:nth-child(1)").innerText = formatTime(date.getHours());
    CLOCK.querySelector("span:nth-child(2)").innerText = formatTime(date.getMinutes());
    CLOCK.querySelector("span:nth-child(3)").innerText = formatTime(date.getSeconds());
}

function setStyle() {
    BODY.style.backgroundImage = "url(images/" + BACKGROUND + ")";
    MAIN.style.background = "rgba(0, 0, 0, " + (1-BRIGHTNESS) + ")";
    
    CREDIT.style.color = COLOR;
    CREDIT.style.fontSize = SIZE/6 + "px";
    CREDIT.style.letterSpacing = SIZE/20 + "px";
    CREDIT.querySelector("span").innerText = AUTHOR;
    
    CLOCK.style.color = COLOR;
    CLOCK.style.fontSize = SIZE + "px";
    CLOCK.style.letterSpacing = SIZE/20 + "px";
    CLOCK.querySelector("span:nth-child(3)").style.fontSize = SIZE/2 + "px";
    CLOCK.querySelectorAll("span").forEach(ele => {
        ele.style.margin = "0 " + SIZE/10 + "px 0 " + SIZE/10 + "px";
    });
}

setStyle();
setTime();
setInterval(setTime, 1000);
