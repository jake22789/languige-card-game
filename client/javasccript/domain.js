export function buildcard(){
    const card = document.createElement("div");
    card.classList = "card";
    card.draggable=true;
    const word = document.createElement("div");
    word.textContent = "word";
    card.appendChild(word);
    word.id = 1;
    return card;
}