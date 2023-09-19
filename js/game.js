//script to memory game
const grid = document.querySelector('.grid');

const cardsimages = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let FirstCard = '';
let SecondCard = '';

const checkCards = () => {
    if(FirstCard.dataset.framework === SecondCard.dataset.framework){
        FirstCard.parentNode.classList.add('match');
        SecondCard.parentNode.classList.add('match');
        FirstCard = '';
        SecondCard = '';
    }
    else{
        setTimeout(() => {
            FirstCard.classList.remove('revealCard');
            SecondCard.classList.remove('revealCard');
            FirstCard = '';
            SecondCard = '';
        }, 1000);
    }
}

const revealCard = ({target}) => {
    if (target.parentNode.className.includes('revealCard')) { return;
    }
    if(FirstCard === ''){
        target.parentNode.classList.add('revealCard');
        FirstCard = target.parentNode;
    }
    else if(SecondCard === ''){
        target.parentNode.classList.add('revealCard');
        SecondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (image) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('cards/${image}.webp')`;
    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-framework', image);

    return card;
}

const loadCards = () => {
    const duplicatecards = [ ...cardsimages, ...cardsimages ];

    const shuffledCards = duplicatecards.sort(() => 0.5 - Math.random());

    shuffledCards.forEach((image) => {

        const card = createCard(image);
        grid.appendChild(card);
        
    })
    
}

loadCards();