import _ from 'lodash';
import './css/style.css';
import Icon from './images/search.png';
import printMe from './javascript/print.js'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const button = document.createElement('button');
    button.innerHTML = 'Click me and check the console';
    button.onclick=printMe;

    const searchIcon = new Image();
    searchIcon.src = Icon;

    element.appendChild(searchIcon);
    element.appendChild(button);

    return element;    
}

document.body.appendChild(component());


