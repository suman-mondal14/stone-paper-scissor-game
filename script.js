let user_score = 0;
let comp_score = 0;

// let choices = document.querySelectorAll(".choice");
// console.log(choices);

// let a = Array.from(choices);
// console.log(a);

// choices.forEach((choice)=>{
//     console.log(choice)
//     choice.addEventListener('click',() => {
//         console.log("Choice is picked")
//         console.log(choice)
//     })
// })

let stone = document.querySelector("#stone");
console.log(stone);
let paper = document.querySelector("#paper");
console.log(paper);
let scissor = document.querySelector("#scissor");
console.log(scissor);

const genarator = () => {

  const a = ["stone", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  return a[num];

}

// function result(uc, cc) {
//     if (uc === cc) {
//         return "Draw";
//     }
//     else if (uc == "sc" && cc == "s") {
//         comp_score += 1;
//         return "Lost, Computer Wins";
//     }
//     else if (uc == "sc" && cc == "p") {
//         user_score += 1;
//         return "Win, Computer Lost"
//     }
//     else if (uc == "s" && cc == "p") {
//         comp_score += 1;
//         return "Lost, Computer Wins"
//     }
//     else if (uc == "s" && cc == "sc") {
//         user_score += 1;
//         return "Win, Computer Lost"
//     }
//     else if (uc == "p" && cc == "sc") {
//         comp_score += 1;
//         return "Lost, Computer Wins"
//     }
//     else if (uc == "p" && cc == "s") {
//         user_score += 1;
//         return "Win, Computer Lost"
//     }
//     else {
//         return "No Result"
//     }
// }


const drawGame = () => {
  console.log("Game was Draw");
  let r = document.querySelector(".result");
  r.style.background = "rgb(7, 63, 46)"
  r.innerHTML = "Game Was Draw";
}

const userWin = () => {
  console.log("You Win");
  user_score = user_score + 1;
  let r = document.querySelector(".result");
  r.style.background = "green"
  r.innerHTML = "You Win"
}

const computerWin = () => {
  console.log("Computer Wins");
  comp_score = comp_score + 1;
  let r = document.querySelector(".result");
  r.style.background = "red"
  r.innerHTML = "Computer Wins"
}

const playGame = (user_choice) => {
  let computer_choice = genarator();
  console.log("User Choice is ", user_choice);
  console.log("Computer Choice is ", computer_choice);


  displayChoice(user_choice, computer_choice)

  if (user_choice === computer_choice) {
    drawGame();
  }
  else {
    if (user_choice === "stone") {
      //comp-> scissors, paper
      (computer_choice === "scissor") ? userWin() : computerWin();
    }
    else if (user_choice === "paper") {
      //comp-> scissor, stone
      (computer_choice === "scissor") ? computerWin() : userWin();
    }
    else {
      //comp-> paper, stone
      (computer_choice === "paper") ? userWin() : computerWin();
    }
  }
  console.log("You -> ", user_score, " Comp -> ", comp_score);
  displayScore(user_score, comp_score);
}

const choiceColor = (user_choice, computer_choice, uc, cc) => {
  if (user_choice === "stone") {
    uc.style.color = "pink"
  }
  if (user_choice === "paper") {
    uc.style.color = "yellow"
  }
  if (user_choice === "scissor") {
    uc.style.color = "blue"
  }
  if (computer_choice === "scissor") {
    cc.style.color = "blue"
  }
  if (computer_choice === "stone") {
    cc.style.color = "pink"
  }
  if (computer_choice === "paper") {
    cc.style.color = "yellow"
  }

}

const displayChoice = (user_choice, computer_choice) => {
  let uc = user_choice;
  let cc = computer_choice;
  let uimg = document.querySelector(".User img");
  let cimg = document.querySelector(".Computer img");
  // console.log(uimg);
  // console.log(cimg);
  uimg.src = `./${uc}.png`
  cimg.src = `./${cc}.png`
}
const displayScore = (user_score, comp_score) => {
  let du = document.querySelector("#digit_user");
  let dc = document.querySelector("#digit_comp");
  console.log(du);
  console.log(dc);
  du.innerHTML = `${user_score}`;
  dc.innerHTML = `${comp_score}`;

}



//addEventListener
stone.addEventListener('click', () => {
  console.log(stone);

  let user_choice = stone.getAttribute("id");
  playGame(user_choice);
  // console.log("User Choice is ", user_choice);

  // computer_choice();
  // console.log("Computer Choice is ", computer_choice());
  // result(user_choice, computer_choice());

  // console.log(comp_score)
  // console.log(user_score)

  //display();
})

paper.addEventListener('click', () => {
  console.log(paper);

  let user_choice = paper.getAttribute("id");
  playGame(user_choice);
  // console.log("User Choice is ", user_choice);

  // computer_choice();
  // console.log("Computer Choice is ", computer_choice());
  // result(user_choice, computer_choice());

  // console.log(comp_score)
  // console.log(user_score)

  //display();
})

scissor.addEventListener('click', () => {
  console.log(paper);

  let user_choice = scissor.getAttribute("id");
  playGame(user_choice);
  // console.log("User Choice is ", user_choice);

  // computer_choice();
  // console.log("Computer Choice is ", computer_choice());
  // result(user_choice, computer_choice());

  // console.log(comp_score)
  // console.log(user_score)

  //display();
})
