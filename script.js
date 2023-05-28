let counter = document.querySelector('h1');
let count =5;

setInterval(() => {
    counter.innerText=count;
    count--
}, 1000);