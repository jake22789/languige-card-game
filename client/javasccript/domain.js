export function buildcard(word,points){
    const pointsElement = document.createElement("div");
    pointsElement.textContent = "";
    const card = document.createElement("div");
    card.classList = "card";
    card.draggable=true;
    const wordElement = document.createElement("div");
    wordElement.textContent = word;
    card.appendChild(wordElement);
    card.appendChild(pointsElement);
    return card;
}