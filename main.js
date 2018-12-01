"use strict";

//Javascript connection established, YES!
//alert("Hello");

let image = document.getElementsByTagName('img');

let img1 = image[0]
window.addEventListener('click', (event)=>{
    img1.classList.toggle('spin')
});

