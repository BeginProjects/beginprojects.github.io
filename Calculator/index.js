let num1
let input = document.getElementById("input-text")
let result
let num2
let btn_number = document.getElementsByClassName("number-btn")

function insert(num){
  pre_num = input.value
  input.value = pre_num + num
}

function add(){
  num1 = Number(document.getElementById("input-text").value)
  input.value = ""
  operator = "add"
}

function sub(){
  num1 = Number(document.getElementById("input-text").value)
  input.value = ""
  operator = "sub"
}

function multiply(){
  num1 = Number(document.getElementById("input-text").value)
  input.value = ""
  operator = "multiply"
}

function division(){
  num1 = Number(document.getElementById("input-text").value)
  input.value = ""
  operator = "division"
}

function equal(){
  num2 = document.getElementById("input-text").value
  num2 = Number(num2)
  if (operator == "add"){
    result = num1 + num2
    input.value = result
  }
  else if (operator == "sub"){
    result = num1 - num2
    input.value = result
  }
  else if (operator == "multiply"){
    result = num1 * num2
    input.value = result
  }
  else if (operator == "divide"){
    result = num1 / num2
    input.value = result
  }
}

function clear(){
  input.value = ""
}
