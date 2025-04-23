let spanElement = document.createElement('span');
spanElement.textContent = "This is a span";
let containerDiv = document.getElementById('container');
containerDiv.appendChild(spanElement);
console.log("Parent of <span>: ", spanElement.parentElement);