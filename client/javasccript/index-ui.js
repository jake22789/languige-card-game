import { sendNewCard } from "./service.js";


function addevents(){
    const playButtonElement = document.getElementById("play");
    const settingsButtonElement = document.getElementById("settings");
    settingsButtonElement.addEventListener("click",(e)=>{
        const boardElement = document.getElementById("page");
        boardElement.replaceChildren();

        const userFormElement = document.createElement("form");
    const userNLabelElement = document.createElement("label");
    const userNameElement = document.createElement("input");
    const userALabelElement = document.createElement("label");
    const userageElement = document.createElement("input");
    const resetButtonElement= document.createElement("button");
    const userSubmitElement = document.createElement("input");
    
    const genderinputElementM = document.createElement("input");
    const genderLabelElementM = document.createElement("label");
    
   
    const genderformElement = document.createElement("div");

    resetButtonElement.addEventListener("click",(e)=>{
      e.preventDefault();
      userFormElement.reset();
    });
    resetButtonElement.textContent = "Reset";
    genderinputElementM.id = "male";
    genderLabelElementM.htmlFor = "male";
    genderLabelElementM.textContent = "Male";
    genderinputElementM.type = "radio";
    genderinputElementM.name = "gender";
    const genderinputElementF = document.createElement("input");
    const genderLabelElementF = document.createElement("label");
    genderinputElementF.id = "female";
    genderLabelElementF.htmlFor = "female";
    genderLabelElementF.textContent = "female";
    genderformElement.id = "gender";
    genderinputElementF.type = "radio";
    genderinputElementF.name = "gender";
    userFormElement.classList = "login";
    userNLabelElement.textContent = "Word for card";
    userALabelElement.textContent = "translated word";
    
    userSubmitElement.type = "submit";
    userNameElement.id = "input";
    userageElement.id = "age";
    userFormElement.appendChild(userNLabelElement);
    userFormElement.appendChild(userNameElement);
    userFormElement.appendChild(userALabelElement);
    userFormElement.appendChild(userageElement);
    
    
    userFormElement.appendChild(genderformElement);

    userFormElement.appendChild(userSubmitElement);
    userFormElement.appendChild(resetButtonElement);
    boardElement.appendChild(userFormElement);

    userFormElement.addEventListener("submit", async (e) => {
      e.preventDefault();
        const userNameElement = document.getElementById("input");
        const userageElement = document.getElementById("age");
      const word = userNameElement.value;
      const translated = userageElement.value;
       await sendNewCard(word, translated);
      location.reload();
    });
    });
    
    console.log(playButtonElement);
    playButtonElement.addEventListener("click",(e)=>{
        window.location.href = "board.html";
    });
    
}
addevents();
