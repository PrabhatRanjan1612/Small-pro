let h1 = document.querySelector("h1");
let p = document.createElement("p");
let body = document.querySelector("body");
  setTimeout(function change(){
    h1.innerText="what is git ?";
  },1000*3);
  setTimeout(function ans(){
    p.innerText="Free & open Source Version control System."
    p.style.color="green";
    p.style.textAlign="center";
    body.appendChild(p);
  },1000*5);