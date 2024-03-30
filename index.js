// Write your code here!

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const yourName = 'Debbie';
newHeader.textContent = '${Debbie} is the champion';

const mainElement = document.getElementById('main');
 if (mainElement) {
    mainElement.parentNode.replaceChild(newHeader, mainElement);
 }