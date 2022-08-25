let image = document.getElementById('img-box')
let img_path = "/home/darklinux/Desktop/Coding Practice/WebDevelopment/DashProjects/PersonalProjects/ImageViewer/Images"
let img_list = [`${img_path}/01.jpg`, `${img_path}/02.jpg`,`${img_path}/03.jpg`,`${img_path}/04.jpg`,`${img_path}/05.jpg`,`${img_path}/06.jpg`,`${img_path}/07.jpg`,`${img_path}/08.jpg`,`${img_path}/09.jpg`,`${img_path}/10.jpg`,`${img_path}/11.jpg`]
let current_index
let n = -1
let m
let img_num = document.querySelector(".img-num")

function nextImg(){
    n += 1;
    current_index = n;
    image.style.display = "block";
    image.src = img_list[n];
    if (n < img_list.length){
      img_num.textContent = `${current_index}/${img_list.length}`;
  }
  else{
    img_num.textContent = "No more images left!";
  }
}

function preImg(){
  current_index -= 1;
  m = current_index;
  n = m
  image.style.display = "block";
  image.src = img_list[m];
  img_num.textContent = `${current_index}/${img_list.length}`;
}
