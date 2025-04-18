function addevents(){
    const playButtonElement = document.getElementById("play");
    const settingsButtonElement = document.getElementById("settings");
    
    console.log(playButtonElement);
    playButtonElement.addEventListener("click",(e)=>{
        window.location.href = "board.html";
    });
    
}
addevents();