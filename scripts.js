//Pop-up КЛЕПА
let popupBg = document.querySelector('.popup__bg');
let closePopupButton = document.querySelector('.close-popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let popup = document.querySelector('.popup');
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

//Pop-up Диджей
let popupBg2 = document.querySelector('.popup__bg2');
let closePopupButton2 = document.querySelector('.close-popup2');
let openPopupButtons2 = document.querySelectorAll('.open-popup2');
let popup2 = document.querySelector('.popup2');

openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
    })
});
closePopupButton2.addEventListener('click',() => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg2) {
        popupBg2.classList.remove('active');
        popup2.classList.remove('active');
    }
});

//Pop-up Сервера Майнкрафт
let popupBg3 = document.querySelector('.popup__bg3');
let closePopupButton3 = document.querySelector('.close-popup3');
let openPopupButtons3 = document.querySelectorAll('.open-popup3');
let popup3 = document.querySelector('.popup3');

openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});
closePopupButton3.addEventListener('click',() => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg3) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});

//Pop-up Сервера Майнкрафт
let popupBg4 = document.querySelector('.popup__bg4');
let closePopupButton4 = document.querySelector('.close-popup4');
let openPopupButtons4 = document.querySelectorAll('.open-popup4');
let popup4 = document.querySelector('.popup4');

openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg4.classList.add('active');
        popup4.classList.add('active');
    })
});
closePopupButton4.addEventListener('click',() => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg4) {
        popupBg4.classList.remove('active');
        popup4.classList.remove('active');
    }
});