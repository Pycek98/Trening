const guzik = document.querySelector("button");

// let flaga = false;
// let size = 10;

// const showComunicate = function() {
//   if (!flaga) {
//     document.querySelector('ul').style.display = "block";
//    flaga = true;
//   }
//   else if (flaga) {
//     size += 1;
    
//     document.querySelector('ul').style.fontSize = `${size}px`;
//   }
// }



// ZRÓB Z UŻYCIEM FOREACH!!!

let size = 10;

const liList = document.querySelectorAll("li")

const plusSize = function() {
  size += 1;
  liList.forEach(li => {
    li.style.fontSize = `${size}px`;
    
  });
}

guzik.addEventListener("click",plusSize);
