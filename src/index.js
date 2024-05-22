import loadRestaurantHomepage from './restaurant-homepage';
import loadRestaurantMenuPage from './restaurant-menu';
import loadRestaurantAboutPage from './restaurant-contact';

import './styles.css';

loadRestaurantHomepage();

const restaurantHome = document.getElementById('restaurant-home');
const restaurantMenu = document.getElementById('restaurant-menu');
const restaurantAbout = document.getElementById('restaurant-about');

restaurantHome.addEventListener('click', () => {
  loadRestaurantHomepage();
});

restaurantMenu.addEventListener('click', () => {
  loadRestaurantMenuPage();
});

restaurantAbout.addEventListener('click', () => {
  loadRestaurantAboutPage();
});
