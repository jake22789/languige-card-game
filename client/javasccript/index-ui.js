

function addevents(){
    const playButtonElement = document.getElementById("play");
    const settingsButtonElement = document.getElementById("settings");
    const quitButtonElement = document.getElementById("quit");
    
    quitButtonElement.addEventListener("click",(e)=>{
        self.close();
    });
    console.log(playButtonElement);
    playButtonElement.addEventListener("click",(e)=>{
        window.location.href = "board.html";
    });
    
}
addevents();
