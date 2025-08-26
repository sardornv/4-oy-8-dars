import { aiChoose } from "./ai.choose.js";
import { checkWinner } from "./check.winner.js";
import { mode, modeChanger } from "./constants.js";
import { elAi, elCountText, elHands, elModeChanger, elPlayer, elRefreshGameButton, elStatusText } from "./html.selection.js";
import { switchZone } from "./switch.zone.js";

let sum = 0;

elHands.forEach((el) => {
    el.addEventListener("click", (e) => {
        const player = e.target.alt;
        const playerSrc = e.target.src
        elPlayer.src = playerSrc;
        switchZone(true)
        setTimeout(() => {
            const ai = aiChoose(mode)
            const winner = checkWinner(ai, player);
            elStatusText.textContent = winner
            console.log(ai);
            elAi.src = `images/${ai}.svg`;
            if(winner === "YOU WIN"){
                elPlayer.classList.add("shadow-[0_0_0_20px_rgba(59,130,246,0.2),0_0_0_40px_rgba(59,130,246,0.15),0_0_0_60px_rgba(59,130,246,0.1)]","rounded-full") 
                sum++
                elCountText.textContent = sum;
            } else if(winner === "YOU LOSE" && sum > 0){
                elAi.classList.add("shadow-[0_0_0_20px_rgba(59,130,246,0.2),0_0_0_40px_rgba(59,130,246,0.15),0_0_0_60px_rgba(59,130,246,0.1)]","rounded-full") 
                sum--
                elCountText.textContent = sum
            }
            elRefreshGameButton.classList.remove("hidden")
            elStatusText.classList.remove("hidden")
        }, 1000)
    })
})

elRefreshGameButton.addEventListener("click", () => {
    elPlayer.classList.remove("shadow-[0_0_0_20px_rgba(59,130,246,0.2),0_0_0_40px_rgba(59,130,246,0.15),0_0_0_60px_rgba(59,130,246,0.1)]","rounded-full") 
    elAi.classList.remove("shadow-[0_0_0_20px_rgba(59,130,246,0.2),0_0_0_40px_rgba(59,130,246,0.15),0_0_0_60px_rgba(59,130,246,0.1)]","rounded-full")
    switchZone(false);
    elAi.src = `images/Oval.svg`;
    elRefreshGameButton.classList.add("hidden")
    elStatusText.classList.add("hidden")
})

elModeChanger.addEventListener("click", () => {
    if(mode === "easy"){
        elModeChanger.textContent = "Hard"
        modeChanger("hard")
    }else{
        elModeChanger.textContent = "Easy"
        modeChanger("easy")
    }
})