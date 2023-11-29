const counterElementShow = document.createElement('p');
counterElementShow.innerHTML = '0';
document.querySelector('body').appendChild(counterElementShow);

let counter = 0;

// Increase the counter by 1 when the button is clicked
const button1 = document.createElement('button');
button1.innerText = 'Increase';
document.querySelector('body').appendChild(button1);
button1.classList.add('btn', 'btn-success');

button1.addEventListener('click', () => {
  counter++;
  counterElementShow.innerHTML = counter;
});

// Decrease the counter by 1 when the button is clicked
const button2 = document.createElement('button');
button2.innerText = 'Decrease';
document.querySelector('body').appendChild(button2);
button2.classList.add('btn', 'btn-dark');

button2.addEventListener('click', () => {
  counter--;
  counterElementShow.innerHTML = counter;
});
