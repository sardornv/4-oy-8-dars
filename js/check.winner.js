import { paper, rock, scissors, lizard, spock } from "./constants.js";

export function checkWinner(ai, player){
    if(ai == player){
        return "DRAW";
    }else if (ai == rock && (player == scissors || player == lizard)){
        return "YOU LOSE";
    }else if (ai == scissors && (player == paper || player == lizard) ) {
        return "YOU LOSE";
    }else if (ai == paper && (player == rock || player == spock)){
        return "YOU LOSE";
    }else if (ai == lizard && (player == spock || player == paper)){
        return "YOU LOSE";
    }else if (ai == spock && (player == scissors || player == rock)){
        return "YOU LOSE";
    }else{
        return "YOU WIN";
    }
}

