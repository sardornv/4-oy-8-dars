import { elHands, elHandsHard, elLogo, elZoneGrid } from "./html.selection.js";

export const {rock, scissors, paper, lizard, spock} = {
    rock:"rock",
    scissors:"scissors",
    paper:"paper",
    lizard:"lizard",
    spock:"spock"
}

export const hands = [rock, scissors, paper, lizard, spock]

export let mode = "easy"

export function modeChanger(value){
    mode = value;

    elHands.forEach((el) => {
        const hand = el.alt;
        if(hand === rock){
           if(value === "hard"){
            el.parentElement.classList.remove("col-start-1", "col-end-3");
           }else{
            el.parentElement.classList.add("col-start-1", "col-end-3");
           }
        }
        if(hand === paper){
            if(value === "hard"){
                el.parentElement.classList.add("col-start-1", "col-end-3","translate-y-6",)
               }else{
                el.parentElement.classList.remove("col-start-1", "col-end-3", "translate-y-6",)
               }
        }
        if(hand === lizard){
            if(value === "hard"){
                el.classList.remove("hidden")
                el.parentElement.classList.add("place-items-end")
               }else{
                el.parentElement.classList.remove("place-items-center")
                el.classList.add("hidden")
               }
        }
        if(hand === spock){
            if(value === "hard"){
                el.classList.remove("hidden")
               }else{
                el.classList.add("hidden")
               }
        }
    })

            if(value === "hard"){
                elLogo.src = 'images/hard.svg'
                elZoneGrid.classList.remove("grid-cols-2", "grid-rows-2","gap-x-20","gap-y-6","max-w-[400px]","bg-[url('../images/triangle.svg')]")
                elZoneGrid.classList.add("grid-cols-2", "grid-rows-3", "gap-x-14", "gap-y-5","max-w-[540px]","bg-[url('../images/polygon.svg')]")
            }else{
                elLogo.src = 'images/tipa-logo.svg'
                elZoneGrid.classList.remove("grid-cols-2", "grid-rows-3","gap-x-14", "gap-y-5","max-w-[540px]","bg-[url('../images/polygon.svg')]")
                elZoneGrid.classList.add("grid-cols-2", "grid-rows-2", "gap-x-20","gap-y-6","max-w-[400px]","bg-[url('../images/triangle.svg')]")
            }
        }
    