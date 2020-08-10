const items = document.querySelectorAll('.main_carrousel_sliders img');
const nbSlide = items.length;
const suivant = document.querySelector('.droite');
const precedent = document.querySelector('.gauche');

let conteur = 0;

function slideSuivante() {
    items[conteur].classList.remove('carrousel_active');
    if (conteur < nbSlide - 1) {
        conteur++;
    } else {
        conteur = 0;
    }

    items[conteur].classList.add('carrousel_active')
    console.log(conteur);
}

suivant.addEventListener('click', slideSuivante)


function slidePrecedente() {
    items[conteur].classList.remove('carrousel_active');

    if (conteur > 1) {
        conteur--;
    } else {
        conteur = nbSlide - 1;
    }

    items[conteur].classList.add('carrousel_active')
    console.log(conteur);
}

precedent.addEventListener('click', slidePrecedente)

function keyPress(e) {
    console.log(e);

    if (e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)