import cardMenuTml from './templates/menu.hbs';
import cards from './menu.json';
import './sass/main.scss';

const menuContainer = document.querySelector('.js-menu');

const cardsMenu = createCardsMenu(cards);

menuContainer.insertAdjacentHTML('afterbegin', cardsMenu);

function createCardsMenu(cards) {
  return cards.map(cardMenuTml).join('');
}

/*Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true,
чтобы ползунок сдвинулся в правильное положение.*/

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
/*Добавляет функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.*/
inputRef.addEventListener('change', changedTheme);

function changedTheme(evt) {
  evt.currentTarget.checked ? darkTheme() : lightTheme();
}

/*Добавляет тему по умолчанию.*/
function defaultTheme() {
  const currentTheme = localStorage.getItem('background');

  if (currentTheme === Theme.DARK) {
    darkTheme();
    return;
  }

  lightTheme();
}

/*добавляeт на элемент body класс light-theme или dark-theme.*/

const replaceTheme = (oldTheme, newTheme) => {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('background', newTheme);
};

function darkTheme() {
  replaceTheme(Theme.LIGHT, Theme.DARK);

  inputRef.checked = true;
}

function lightTheme() {
  replaceTheme(Theme.DARK, Theme.LIGHT);

  inputRef.checked = false;
}
