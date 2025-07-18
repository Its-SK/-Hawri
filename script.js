const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");


var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = null;
var count = 0;


startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value;

    if (input== ""){
        gifLanding.src = "https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif";
        questionLanding.innerHTML = "Please give  me your name before you start!"
    }
    else{
        document.head.innerHTML = "<meta charset='UTF-8'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Will you go out with me?</title>"+
        "<link rel='stylesheet' href='styles.css'/>"

        document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Hello "+input+ "! Will you go out with me?</h2>"+
        "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>"+
        "<div class='btn-group'><button class='yes-btn'>Yes</button>"+
        "<button class='no-btn'>No</button></div></div>"

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);
    }
});

function yesButtonListener(){
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Meet you soon ❤️, "+input+ "!</h2>"+
    "<img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/></div><script src='scriptMain.js'></script>"
    
}

function noButtonListener() {
    if (count < 5) {
        gifMain.src = "https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
        questionMain.innerHTML = "You don't want to go out with me?";
    } else if (count >= 5 && count < 10) {
        gifMain.src = "https://media.giphy.com/media/QuCslOrnS649PSCnn7/giphy.gif";
        questionMain.innerHTML = "Stop playing with me! Do you go out with me or not?!";
    } else {
        gifMain.src = "https://media.giphy.com/media/8OPf6xrtXi3QEcu5h9/giphy.gif";
        questionMain.innerHTML = "JUST ANSWER IT! YES or NO?!";
    }

    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count++;
}


