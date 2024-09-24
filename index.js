// document.querySelector("button").addEventListener("click", () => handleClick("hai"));


// function handleClick(greet) {
//     alert (`Hello FSW 2 ${greet}`);
// }

// handleClick();


let button = document.querySelectorAll(".drum");
console.log(button[0]);


let body = document.body;

function changeColor(button) {
    // Update the box color
    button.style.color = "#DA0463";
};


// for (let i = 0; i < button.length; i++) {
    // button[i].addEventListener('keypress', function (e) {
body.addEventListener('keypress', function (e) {
    
    // alert("hallo fsw 2" + ' ' + [i]);

    // after button di click
    // let audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    
    switch(e.key) {
        case 'w' :
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            button[0].style.color = "blue";
            setTimeout(function () {
                changeColor(button[0]);
            }, 2000);
            break;
        case 'a' :
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            button[1].style.color = "blue";
            setTimeout(function () {
                changeColor(button[1]);
            }, 2000);
            break;
        case 's' :
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            button[2].style.color = "blue";
            setTimeout(function () {
                changeColor(button[2]);
            }, 2000);
            break;
        case 'd' :
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            button[3].style.color = "blue";
            setTimeout(function () {
                changeColor(button[3]);
            }, 2000);
            break;
        case 'j' :
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            button[4].style.color = "blue";
            setTimeout(function () {
                changeColor(button[4]);
            }, 2000);
            break;
        case 'k' :
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            button[5].style.color = "blue";
            setTimeout(function () {
                changeColor(button[5]);
            }, 2000);
            break;
        case 'l' :
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            button[6].style.color = "blue";
            setTimeout(function () {
                changeColor(button[6]);
            }, 2000);
            break;
        default:
    }
});
// }
