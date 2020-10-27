const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1

const authButton = document.querySelector('.button-auth');
const authModal = document.querySelector('.modal-auth');
const authClose = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const outButton = document.querySelector('.button-out');

let login = localStorage.getItem('Delivery');

function toggleModalAuth() {
  authModal.classList.toggle('is-open');
}

function authorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('Delivery');
    authButton.style.display = '';
    userName.style.display = '';
    outButton.style.display = '';
    outButton.removeEventListener('click', logOut);
    checkAuth();
  }

  userName.textContent = login;

  authButton.style.display = 'none';
  userName.style.display = 'inline';
  outButton.style.display = 'block';

  outButton.addEventListener('click', logOut);
}

function notAuthorized() {
  
  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;

    localStorage.setItem('Delivery', login);

    if(login) {
      toggleModalAuth();
    } else {
      alert('Введите имя пользователя и пароль!');
    }

    authButton.removeEventListener('click', toggleModalAuth);
    authClose.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
  }

  authButton.addEventListener('click', toggleModalAuth);
  authClose.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if(login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();