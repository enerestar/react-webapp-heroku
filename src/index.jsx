import './css/style.css';
import Icon from './images/search.png';
import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './javascript/components/like_button'
import FilteringComponent from './javascript/components/filtering_component'

console.log("helloooo " + process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

const countries = [
    "Singapore", "China", "Japan", "USA"
]
const Index = () => {
    return (
        <div>Hello React
        <LikeButton></LikeButton>
        <FilteringComponent content={countries}></FilteringComponent>
        </div>
    );
}

ReactDOM.render(<Index/>, document.getElementById('index'));

// function component() {
//     // const element = document.createElement('div');
//     const element = document.createElement('pre');

//     element.innerHTML = [
//         'Hello webpack',
//         '5 cubed equals' + cube(5),
//     ].join('\n\n');

//     // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//     element.classList.add('title')

//     const button = document.createElement('button');
//     button.innerHTML = 'Search me ';
//     button.onclick=printMe;

//     const searchIcon = new Image();
//     searchIcon.src = Icon;

//     element.appendChild(searchIcon);
//     element.appendChild(button);

//     return element;    
// }

// document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./javascript/print.js', function() {
//         console.log('Accepting the updated module');
//     })
// }

