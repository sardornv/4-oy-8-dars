import { hands } from "./constants.js";

export function aiChoose(mode = "easy"){
    const hard = 5;
    const easy = 3;
    const border = mode === "easy" ? easy : hard
    const randIndex = Math.trunc( Math.random() * border );
    return hands[randIndex]
}