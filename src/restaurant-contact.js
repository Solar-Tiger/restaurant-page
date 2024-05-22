import aboutPageLogo from './assets/images/chaos-kitchen-about-page-logo.png';
import itWasMeDio from './assets/images/jojos-bizarre-adventures-it-was-me.gif';

export default function loadAboutPage() {
  const homepageContent = document.getElementById('content');

  homepageContent.textContent = '';

  // About page header

  const header = document.createElement('header');

  // header.classList.add('dio');

  const h1 = document.createElement('h1');

  h1.textContent = 'Who are we?';

  // h1.textContent = 'You were expecting a menu, BUT-';

  //   IT WAS ME, DIO

  // const dioImg = document.createElement('img');

  // dioImg.src = itWasMeDio;
  // dioImg.width = '340';

  homepageContent.appendChild(header);
  header.append(h1);

  //   About page logo

  const aboutPageLogoImg = document.createElement('img');

  aboutPageLogoImg.src = aboutPageLogo;
  aboutPageLogoImg.width = '340';
  aboutPageLogoImg.alt = 'about page logo';

  homepageContent.appendChild(aboutPageLogoImg);

  const chaosKitchenAbout = document.createElement('p');

  chaosKitchenAbout.style.fontWeight = 'bold';

  chaosKitchenAbout.textContent =
    "Here at the Chaos Kitchen we leave you wanting more and not less! The taste combinations that will sweep your sensations will be beyond catastrophic as the flavors cause pandemonium in your mouth! Thanks to the way we mix up the ingredients in all our dishes it's guaranteed to cause disorder in the best possible way!";

  homepageContent.appendChild(chaosKitchenAbout);
}
