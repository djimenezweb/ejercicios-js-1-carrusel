import '../scss/styles.scss';
import { nextCard, prevCard } from './fillCard.js';

const prevButton = document.getElementById('previous-card');
const nextButton = document.getElementById('next-card');

nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);
