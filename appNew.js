const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

let user_score = 0;
let computer_score = 0;

let click = () => {
    rock.addEventListener('click', () => {
        game("r");
    });

    paper.addEventListener('click', () => {
        game("p");
    });

    scissors.addEventListener('click', () => {
        game("s");
    });
}

click();

let compChoice = () => {
    const choices = ['r', 'p', 's'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

let game = (userChoice) => {
    let computerChoice = compChoice();

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;      
           
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

let win = (user, computer) => {
    user_score++;
    userScore.innerHTML = user_score;
    compScore.innerHTML = computer_score;
    const userSmall = "user".fontsize(3).sub();
    const compSmall = "computer".fontsize(3).sub();

    result.innerHTML = `${convert(user)} ${userSmall} beats ${convert(computer)} ${compSmall}. You win!`;

    colorFlash(user, "green-glow");
}

let lose = (user, computer) => {
    computer_score++;
    userScore.innerHTML = user_score;
    compScore.innerHTML = computer_score;
    const userSmall = "user".fontsize(3).sub();
    const compSmall = "computer".fontsize(3).sub();

    result.innerHTML = `${convert(user)} ${userSmall} loses to ${convert(computer)}  ${compSmall}. You lose!`;
    
    colorFlash(user, "red-glow");
}

let draw = (user, computer) => {
    userScore.innerHTML = user_score;
    compScore.innerHTML = computer_score;
    const userSmall = "user".fontsize(3).sub();
    const compSmall = "computer".fontsize(3).sub();

    result.innerHTML = `${convert(user)} ${userSmall} equals ${convert(computer)}  ${compSmall}. You draw`;

    colorFlash(user, "gray-glow");
}

let convert = (letter) => {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
     return "Scissors";
}

let colorFlash = (idname, colorglow) => {
    document.getElementById(idname).classList.add(colorglow);

    setTimeout(() => {
        document.getElementById(idname).classList.remove(colorglow);
    }, 500);
}