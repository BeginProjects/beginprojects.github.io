let label = document.querySelector("label")

setInterval(clock, 1000);

function clock(){
  date = new Date

  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();

  h = hour.toString();
  m = minute.toString();
  s = second.toString();

  console.log(s.length)

  if (h.length < 2){
    hour = "0" + h;
  }
  else if (m.length < 2) {
    minute = "0" + m;
  }
  else if (s.length < 2){
    second = "0" + s;
  }

  label.textContent = `${hour}  : ${minute}  :  ${second}`
}

clock();
