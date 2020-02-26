import _ from 'lodash';
import './style.css';
import Icon from './search.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const searchIcon = new Image();
    searchIcon.src = Icon;

    element.appendChild(searchIcon);
    
    return element;    
}

document.body.appendChild(component());


