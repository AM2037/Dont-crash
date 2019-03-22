var gamePiece;
var theObstacles = [];
var score;

function beginGame() {
    gamePiece = new component();
    gamePiece.gravity = 0.05;
    score = new component("24px", "Raleway", "Black", 240, 80, "text");


    var gamearea = document.GetElementById('game-area');

    if (gamearea.getContext) {
        var gametx = canvas.getContext('2d');
    } else {
        // put unsupported canvas code here
    }
}