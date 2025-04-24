import { buildcard } from "./domain.js";
import {fetchHand} from "./service.js";

var handList = await fetchHand();

var selectedList = [];
async function drawHand(){
        const handElement = document.getElementById("hand");
        handElement.replaceChildren();
        var num = 0;
        
        handList.forEach(card => {
            //console.log(card.word);
            const cardElement = buildcard(card.word, card.id);
            cardElement.id = num;
            handElement.appendChild(cardElement);
            cardElement.addEventListener("dragstart",(e) => {
                e.dataTransfer.setData("text", e.target.id);
                
            });
            num++;
        });
        if (!hasDuplicateIds(handList)) {
            handList = await fetchHand();
            drawHand();
        }


}
async function drawselected(){
    const selectedElement = document.getElementById("selected");
    selectedElement.replaceChildren();
    var num = 0;
    selectedList.forEach(card => {

        //console.log(card.word);
        const cardElement = buildcard(card.word, card.id);
        cardElement.id = num;
        selectedElement.appendChild(cardElement);
        cardElement.addEventListener("dragstart",(e) => {
            e.dataTransfer.setData("text", e.target.id);
            
        });
        num++;
    });

}
drawHand();

function renderGameInfo(){
    const score = document.getElementById("scoredisplay");
    const group = document.getElementById("select-hand");
    const targetscore = document.getElementById("targetnum");

    score.textContent = "0";
    group.textContent = "todo";
    targetscore.textContent="100";
}
function calculateScore() {
    const scoreElement = document.getElementById("scoredisplay");
    let number = parseInt(scoreElement.textContent, 10) || 0;

    const idCount = {};
    selectedList.forEach(card => {
        idCount[card.id] = (idCount[card.id] || 0) + 1;
    });

    for (const id in idCount) {
        if (idCount[id] > 1) {
            number += parseInt(id, 10) * (idCount[id] - 1); // Add duplicates to the score
        }
    }

    scoreElement.textContent = Math.max(number, 0).toString(); // Ensure score doesn't go below 0
    //console.log(number);
}
function addEventliseners(){
    const List = document.getElementById("selected");
    const handElement = document.getElementById("hand");
    handElement.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
    handElement.addEventListener("drop", (e) => {
        e.preventDefault();

        
        const data = e.dataTransfer.getData("text");
        handList.push(selectedList[data]);
        selectedList.splice(data, 1);
        drawHand();
        drawselected();
        
      });
    const buttonElement = document.getElementById("playHand");
    buttonElement.addEventListener("click", async(e)  => {
        e.preventDefault();
        const selectedContainerElement = document.getElementById("selected");
        selectedContainerElement.replaceChildren();
        calculateScore();
        selectedList = [];
        handList = await fetchHand(); 
        drawHand();

    });
    List.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
    List.addEventListener("drop", (e) => {
        e.preventDefault();

        const data = e.dataTransfer.getData("text");
        selectedList.push(handList[data]);
        handList.splice(data, 1);
        drawHand();
        drawselected();
        
      });

}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function hasDuplicateIds(list) {
    if (selectedList.length !== 0) {
        return true;
    }
    const idSet = new Set();
    for (const card of list) {
        if (idSet.has(card.id)) {
            return true; // Duplicate found
        }
        idSet.add(card.id);
    }
    return false; // No duplicates
}
addEventliseners();
renderGameInfo();