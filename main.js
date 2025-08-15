let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let hazem = document.getElementById('hazem');

let word = 'i am hazem this is my project, if you want to visit my projects search me on <center>github</center>';

d1.style.transition = '2.5s';

setTimeout(() => {
    let i = 0;
    let typing = setInterval(() => {
        hazem.innerHTML = word.slice(0, i);
        i++;
        if (i > word.length) {
            clearInterval(typing);
        }
    }, 50);
}, 1500);
