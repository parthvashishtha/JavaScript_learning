// console.log(window);

// window.alert(1);

// Single element

// console.log(document.getElementById('my-form'));

//  Doing same thing by assigining variable below

const form = document.getElementById('my-form');
console.log(form); // It all comes under single element selector
console.log(document.querySelector('h1'));

// Multiple element

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('items'));
console.log(document.getElementsByTagName('ul'));


const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent=('Ayooo');
ul.children[2].innerHTML=('Chunky')
ul.lastElementChild.innerHTML = ('Vengeance');
