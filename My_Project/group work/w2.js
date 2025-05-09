let count = 0;

let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");


btn.addEventListener("click", function() {
    
    if (styles === "bm") {
      count--;
    } else if (styles === "bp") {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }


  });