number = document.getElementById('number')
count = 0

function increase(){
  count +=1
  number.innerHTML = count
}

function reset(){
  count = 0
  number.innerHTML = count
}

function decrease(){
  count -=1
  number.innerHTML = count
}
