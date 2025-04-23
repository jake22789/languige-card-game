import { buildcard } from "./domain.js";

function drawHand(){
        const handElement = document.getElementById("hand");
        const card = buildcard();
        const card2 = buildcard();
        handElement.appendChild(card);
        handElement.appendChild(card2);

}
drawHand();
function renderSelected(){
    const selecteElement = document.getElementById("selected");

}
function renderGameInfo(){
    const score = document.getElementById("scoredisplay");
    const group = document.getElementById("select-hand");
    const targetscore = document.getElementById("targetnum");

    score.textContent = "0";
    group.textContent = "todo";
    targetscore.textContent="todo";
}
function calculateScore(){
    const selectedcards = getselected 
    const scoreElement = document.getElementById("scoredisplay");

    var number = scoreElement.textContent;
    console.log(number);

}
renderGameInfo();
calculateScore();