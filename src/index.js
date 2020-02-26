// import _ from 'lodash';
import './css/style.css';
import Icon from './images/search.png';
import printMe from './javascript/print.js'
import { cube } from './javascript/math.js';

function component() {
    // const element = document.createElement('div');
    const element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack',
        '5 cubed equals' + cube(5),
    ].join('\n\n');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.classList.add('title')

    const button = document.createElement('button');
    button.innerHTML = 'Search me ';
    button.onclick=printMe;

    const searchIcon = new Image();
    searchIcon.src = Icon;

    element.appendChild(searchIcon);
    element.appendChild(button);

    return element;    
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./javascript/print.js', function() {
        console.log('Accepting the updated module');
    })
}

