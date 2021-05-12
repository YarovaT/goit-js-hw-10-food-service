import cardMenuTml from './templates/menu.hbs';
import cards from './menu.json';
import './sass/main.scss';

const menuContainer = document.querySelector('.js-menu');

const cardsMenu = createCardsMenu(cards);

menuContainer.insertAdjacentHTML('afterbegin', cardsMenu);

function createCardsMenu(cards) {
  return cards.map(cardMenuTml).join('');
}
