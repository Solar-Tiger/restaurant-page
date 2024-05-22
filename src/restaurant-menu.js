import meatballBurgers from './assets/images/mozzarella-stuffed-meatball-burgers.jpg';
import frenzyTunaMelt from './assets/images/frenzy-tuna-melt.jpeg';
import mixedGreekTacos from './assets/images/chaos-tacos.jpg';

const chaosMenu = [
  {
    img: meatballBurgers,
    imgAlt: 'mozzarella stuffed mealball burgers',
    name: 'Mayhem meatball burgers',
    description:
      "The mayhem caused by these mozzarella stuffed meatball burgers is sure to be worth the justification of causing a little bit of a mess! Just don't ask what the meatballs are stuffed with!",
  },
  {
    img: frenzyTunaMelt,
    imgAlt: 'frenzy tuna melt',
    name: 'Frenzy Tuna Melt',
    description:
      'The frenzy tuna melt will leave your mouth questioning why you even tried it! The frenzy part is the surprise: you get different vegetables mixed in every time!',
  },
  {
    img: mixedGreekTacos,
    imgAlt: 'mixed greek chaos tacos',
    name: 'Chaos Greek tacos',
    description:
      "What beef? What sauce? What vegetables? We don't even know! The beef changes daily and the sauce is hourly! You getting mayonaise? Horse radish? Our special sauce? The vegetables can be brussel sprouts today and seaweed tomorrow!",
  },
];

export default function loadRestaurantMenuPage() {
  const homepageContent = document.getElementById('content');

  homepageContent.textContent = '';

  // Menu header

  const h1 = document.createElement('h1');

  h1.textContent = 'The most chaotic menu in existence!';

  homepageContent.appendChild(h1);

  // Menu items

  chaosMenu.forEach((menuItem) => {
    const containerDiv = document.createElement('div');

    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    img.src = menuItem.img;
    img.width = '340';
    img.height = '190';
    img.alt = menuItem.imgAlt;

    h2.textContent = menuItem.name;
    h2.classList.add('menu-header');

    p.textContent = menuItem.description;

    containerDiv.append(img, h2, p);

    homepageContent.appendChild(containerDiv);
  });
}
