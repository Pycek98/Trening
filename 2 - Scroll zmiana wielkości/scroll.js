const kwadrat = document.createElement("div");
document.body.appendChild(kwadrat);
let size = 10;
kwadrat.style.width = `${size}px`;
kwadrat.style.height = `${size}px`;

let grow = true;

window.addEventListener("scroll", function(){
  if (grow == true){
    size+=5 ;
    kwadrat.style.width = `${size}px`;
    kwadrat.style.height = `${size}px`;
  }
  else{
    size-=5 ;
    kwadrat.style.width = `${size}px`;
    kwadrat.style.height = `${size}px`;
  };

  if (size >= window.innerWidth / 2){
    grow = false;
  }
  else if (size <= 10){
    grow = true;
  };
})