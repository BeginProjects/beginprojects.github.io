let computer_choice
let input = document.getElementById("input-field")
let user_guess
let turns
let msg = document.getElementById("msg")
let turns_left = document.getElementById("turns-left")
let continue_playing = document.getElementById("continue")
let task_complete
let score = document.getElementById("score")

computer_choice = Number(Math.round((Math.random()* 100)));
turns = 30
task_complete = 0

function verify(){
    user_guess = Number(input.value);

    if (user_guess > computer_choice && turns > 0){
      msg.style.display = "block";
      msg.innerHTML = "Ohh! your guess is greater than my number.";
      turns = turns - 1
      turns_left.style.display = "block"
      turns_left.innerHTML = "Turns left: " + turns
      input.value = ""
      score.style.display = "block"
      score.innerHTML = "Score: " + task_complete
    }
    else if (user_guess < computer_choice && turns > 0){
      msg.style.display = "block";
      msg.innerHTML = "Ohh! your guess is smaller than my number.";
      turns = turns - 1
      turns_left.style.display = "block"
      turns_left.innerHTML = "Turns left: " + turns
      input.value = ""
      score.style.display = "block"
      score.innerHTML = "Score: " + task_complete
    }
    else if (turns == 0){
      msg.style.display = "block";
      msg.innerHTML = "Ohh! sorry but no more turns left.";
      input.value = ""
      score.style.display = "block"
      continue_playing.style.display = "none";
      score.innerHTML = "Score: " + task_complete
    }
    else if (user_guess == computer_choice && turns > 0){
      msg.style.display = "block";
      msg.innerHTML = "Boom! task complete you guess the right number.";
      score.style.display = "block"
      score.innerHTML = "Score: " + task_complete
      task_complete = task_complete + 1
      input.value = ""
      computer_choice = Number(Math.round((Math.random()* 100)));
      continue_playing.style.display = "block";
      continue_playing.innerHTML = "Hmm! I see you still have some turns left so now I have changed my mind and my number as well so now your new task is to guess the new number within the number of turns left."
    }
  }
