import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import data from '../DATA.json';
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});
console.log('Hello Coders! :)');
let restaurantelements='';
data.restaurants.forEach(restaurant =>{
    restaurantelements += `
                <article class="post-item">
                    <p tabindex="0" class="city_label">${restaurant.city}</p>
                    <img class="post-item__thumbnail"
                         src="${restaurant.pictureId}" alt="${restaurant.name} Picture">
                    <div class="post-item__content">
                        <p tabindex="0" class="post-item__rating">Rating : <span>${restaurant.rating}</span></p>
                        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
                        <p tabindex="0" class="post-item__description">${restaurant.description}</p>
                    </div>
                </article>`;
})

document.querySelector(".posts").innerHTML = restaurantelements