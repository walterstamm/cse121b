/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Walter Stamm';
const currentYear = 2023
const profilePicture = '/images/walterstamm.png'



/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;





/* Step 5 - Array */

const food = ['Pizza', 'Pasta', 'Steak', 'Sushi', 'Tacos', 'Burgers', 'Ramen', 'Curry', 'Salad', 'Soup'];
foodElement.innerHTML = `<p> ${food[0]}, ${food[1]}, ${food[2]}, ${food[3]}, ${food[4]}, ${food[5]}, ${food[6]}, ${food[7]}, ${food[8]}, ${food[9]}</p>`;
 
const newFood = 'Potatos'
food.push(newFood);
foodElement.innerHTML += `<p> ${food[0]}, ${food[1]}, ${food[2]}, ${food[3]}, ${food[4]}, ${food[5]}, ${food[6]}, ${food[7]}, ${food[8]}, ${food[9]} <br>${food[10]}`;

food.shift();
foodElement.innerHTML += `<p> ${food[0]}, ${food[1]}, ${food[2]}, ${food[3]}, ${food[4]}, ${food[5]}, ${food[6]}, ${food[7]}, ${food[8]} <br>${food[9]}`;

//Remove the last element in the favorite food array
food.pop();
foodElement.innerHTML += `<p> ${food[0]}, ${food[1]}, ${food[2]}, ${food[3]}, ${food[4]}, ${food[5]}, ${food[6]}, ${food[7]}, ${food[8]}`;





