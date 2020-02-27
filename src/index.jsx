import './css/style.css';
import Icon from './images/search.png';
import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './js/components/like_button'
import Search from './js/components/search'

console.log("helloooo " + process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

const Index = () => {
    return (
        <div>Hello React
        <LikeButton></LikeButton>
        <Search></Search>
        </div>
    );
}

ReactDOM.render(<Index/>, document.getElementById('index'));

// if (module.hot) {
//     module.hot.accept('./javascript/print.js', function() {
//         console.log('Accepting the updated module');
//     })
// }

