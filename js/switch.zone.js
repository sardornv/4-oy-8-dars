import { elChooseZone, elStatusZone } from "./html.selection.js";

export function switchZone (boolean) {
    if(boolean){
        elChooseZone.classList.add("hidden");
        elStatusZone.classList.remove("hidden");
    }else{
        elChooseZone.classList.remove("hidden");
        elStatusZone.classList.add("hidden");
    }
}