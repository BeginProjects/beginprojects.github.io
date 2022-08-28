let computer_choice = document.querySelector("#computer-choice");
let player_choice = document.querySelector("#player-choice");
let possible_actions = ["Rock", "Paper", "Scissor"];
let result = document.querySelector("#result");
let c_score = document.querySelector("#c-score");
let p_score = document.querySelector("#p-score");

// Computer Choice

let computer_turn;
let computer_score = 0;

// Player Choice

let player_turn;
let display_computer_choice;
let player_score = 0;

function rock(){
  computer_turn = Math.round(Math.random()*2);
  display_computer_choice = possible_actions[computer_turn];
  player_turn == "Rock";
  computer_choice.textContent = `Computer Choice: ${display_computer_choice}`;
  player_choice.textContent = `Player Choice: Rock`
  if (player_turn == display_computer_choice){
    result.textContent = "It's a draw!";
  }
  else if (display_computer_choice == "Paper"){
    result.textContent = "Computer Win."
    computer_score += 1;
    c_score.textContent = `Computer Score: ${computer_score}`;
  }
  else if (display_computer_choice == "Scissor"){
    result.textContent = "Player Win."
    player_score += 1
    p_score.textContent = `Player Score: ${player_score}`;
  }
}

function paper(){
  computer_turn = Math.round(Math.random()*2);
  display_computer_choice = possible_actions[computer_turn];
  player_turn == "Paper";
  computer_choice.textContent = `Computer Choice: ${display_computer_choice}`;
  player_choice.textContent = `Player Choice: Paper`
  if (player_turn == display_computer_choice){
    result.textContent = "It's a draw!"
  }
  else if (display_computer_choice == "Scissor"){
    result.textContent = "Computer Win.";
    computer_score += 1
    c_score.textContent = `Computer Score: ${computer_score}`;
  }
  else if (display_computer_choice == "Rock"){
    result.textContent = "Player Win."
    player_score += 1
    p_score.textContent = `Player Score: ${player_score}`;
  }
}

function scissor(){
  computer_turn = Math.round(Math.random()*2);
  display_computer_choice = possible_actions[computer_turn];
  player_turn == "Scissor";
  computer_choice.textContent = `Computer Choice: ${display_computer_choice}`;
  player_choice.textContent = `Player Choice: Scissor`
  if (player_turn == display_computer_choice){
    result.textContent = "It's a draw!"
  }
  else if (display_computer_choice == "Rock"){
    result.textContent = "Computer Win."
    computer_score += 1
    c_score.textContent = `Computer Score: ${computer_score}`;
  }
  else if (display_computer_choice == "Paper"){
    result.textContent = "Player Win."
    player_score += 1
    p_score.textContent = `Player Score: ${player_score}`;
  }
}
