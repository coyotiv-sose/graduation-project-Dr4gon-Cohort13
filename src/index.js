const newP = document.createElement('p');
newP.innerText = 'Bla';
document.querySelector('body').appendChild(newP);

const button1 = document.createElement('button');
button1.innerText = 'Click me, dude!';
document.querySelector('body').appendChild(button1);
button1.classList.add('btn', 'btn-success');
