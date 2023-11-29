const newP = document.createElement('p');
newP.innerText = 'Bla';
document.querySelector('body').appendChild(newP);

const button1 = document.createElement('button');
button1.innerText = 'Click me, dude!';
document.querySelector('body').appendChild(button1);
button1.classList.add('btn', 'btn-success');

button1.addEventListener('click', () => {
  console.log('You clicked me!');
  button1.innerText = 'You clicked me!';
});

// If you click on button2, it will change the text of button1
button1.addEventListener('click', () => {
  button1.innerText = 'You pushed me dude!';
});
const button2 = document.createElement('button');
button2.innerText = 'Click to follow up';
document.querySelector('body').appendChild(button2);
button2.classList.add('btn', 'btn-success');

button2.addEventListener('click', () => {
  console.log('You clicked me!');
  button1.innerText = 'Click to follow up';
});
