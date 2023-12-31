// Assign a value to a varible
// the return may look like this
// `<p></p>`
const counterElementShow = document.createElement('p');

// Access an attribute which is a variable as well
// and set it manually to 0
counterElementShow.innerHTML = 0;

//<body> ....</body>
const bodyHTML = document.querySelector('body');

// <body> <p>0</p> </body>
bodyHTML.appendChild(counterElementShow);

// Create a variable to store the counter
// It's a number with default 0
let counter = 0;

// // Increase the counter by 1 when the button is clicked
// // <button> Increase </button>
// const button1 = document.createElement('button');
// button1.innerText = 'Increase';

// // <body> <p>0</p> <button> Increase </button> </body>
// document.querySelector('body').appendChild(button1);

// // <body> <p>0</p> <button class='btn btn-success'> Increase </button> </body>
// button1.classList.add('btn', 'btn-success');

// // <body> <p>0</p> <button class='btn btn-success'> Increase </button> </body>
// // You can't see the listener but it's there
// // You need to fire the event click = mouse click
// button1.addEventListener('click', () => {
//   // Increase the counter by 1
//   counter++;
//   // Show the counter in the HTML
//   counterElementShow.innerHTML = counter;
// });

function createButton(buttonName, buttonClass) {
  const button = document.createElement('button');

  button.innerText = buttonName;
  document.querySelector('body').appendChild(button);
  console.log(buttonClass); // 'btn-darK
  button.classList.add('btn', buttonClass);
  // button.classList.add('btn','btn-darK');
  // button1.classList.add('btn', 'btn-success');

  return button; // <button class='btn awdawd'> buttonName </button>
}

function addGiveFunction(button) {
  button.addEventListener('click', () => {
    if (button.innerText === 'Increase') {
      counter++;
      counterElementShow.innerHTML = counter;
    } else if (button.innerText === 'Decrease') {
      counter--;
      counterElementShow.innerHTML = counter;
    } else {
      counter = 0;
      counterElementShow.innerHTML = counter;
    }
  });
}
const decreaseButtonName = 'Decrease';

const decreaseButton = createButton(decreaseButtonName, 'btn-dark');
// decreaseButton = buttonName, html tag, css classes
addGiveFunction(decreaseButton);

const increaseButton = createButton('Increase', 'btn-success');
addGiveFunction(increaseButton);

for (let index = 0; index < 10; index++) {
  const button = createButton('button' + index, 'btn-primary');
  addGiveFunction(button);
}
