window.onload = function time() {
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var date = today.getDate();
    var day = dayName[today.getDay()];
    var month = monthName[today.getMonth()];

    hour = checkTime(hour);
    minute = checkTime(minute);
    date = checkTime(date);

    document.getElementById('clock').innerHTML = hour + ":" + minute;
    document.getElementById('date').innerHTML = day + ", " + month + " " + date;

    var t = setTimeout(time, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function overlay() {
    // get rid of overlay
    document.getElementById("overlay").style.display = "none";

    // switch
    var switchAnimation = "opacity: 0; transform: scale(1.2); transition-duration: 0.2s;"

    var timeStyle = document.getElementById("time").style;
    timeStyle.cssText = switchAnimation;

    var ico1 = document.getElementsByClassName("send-email")[0].style;
    ico1.cssText = switchAnimation;

    var ico1 = document.getElementsByClassName("internet-1")[0].style;
    ico1.cssText = switchAnimation;

    var bgInfo = document.getElementById("background-info").style;
    bgInfo.cssText = switchAnimation;

    setTimeout(function () { removeTime(); }, 200);

    var loginDiv = document.getElementById("login").style;
    loginDiv.cssText = "opacity: 1; transition-duration: 0.5s; background-color: rgba(0, 0, 0, 0.5);";

    setTimeout(function () { document.getElementById("pw").focus(); }, 1);


    document.getElementById("background").style.cssText = "transform: scale(1.05);"
}

function removeTime() {
    document.getElementById("time").style.display = "none";
    document.getElementById("bottom").style.display = "none";
}

function forgot() {
    alert("Like you knew the password, huh?");
}

function signInOption() {
    var message = "Code your own options, lazy ass!"
    alert(message);
}

function detectEnter(e) {
    if (e.keyCode == 13) {
        validatePassword();
    }
}

function validatePassword() {
    var pw = ""; // default no password
    var input_pw = document.getElementById("pw");

    if (input_pw.value == pw) {
        window.open("https://platelets.fun/", "_self"); //weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb
    }
    else {
        switchElement("fake-link", "wrongPassword");
    }
}

function switchElement(eleA, eleB) {
    var eA = document.getElementById(eleA).style;
    var eB = document.getElementById(eleB).style;

    eA.cssText = "display: none;";
    eB.cssText = "display: initial";
}

function okButton() {
    switchElement("wrongPassword", "fake-link");
    document.getElementById("pw").value = "";
    document.getElementById("pw").focus();
}

function closeCurrentTab() {
    window.open('', '_parent', '');
    window.close();
}

function showSocial() {
    var toggle = document.getElementsByClassName("ease-of-access")[0];
    var menu = document.getElementById("social-links");
    menu.style.display = (menu.dataset.toggled ^= 1) ? "block" : "none";
}

window.addEventListener('mouseup', function (event) {
    var menu = document.getElementById("social-links");
    if (event.target != menu) {
        menu.style.display = "none";
    }
});