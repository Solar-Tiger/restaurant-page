import chaosKitchenLogo from './assets/images/chaos-kitchen-logo.png';

export default function loadRestaurantHomepage() {
  const homepageContent = document.getElementById('content');

  const containerDiv = document.createElement('div');

  homepageContent.textContent = '';

  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');

  h1.textContent = "Welcome to Random's Chaos Kitchen!";

  img.src = chaosKitchenLogo;
  img.width = '340';
  img.height = '190';
  img.alt = 'chaos kitchen logo';

  p.textContent =
    "You won't find more chaos and mayhem then here at the Chaos Kitchen! We whip you up storms of meals that even the gods themselves would find hard to quell!";

  containerDiv.append(h1, img, p);

  homepageContent.appendChild(containerDiv);
}
