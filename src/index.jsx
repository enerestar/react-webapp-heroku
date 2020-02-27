import './css/style.css';
import Icon from './images/search.png';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './js/components/search';
import { colors, fonts, cards } from './js/components/style';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

const MyHeader = (props) => {
    return (<div style={{ ...fonts.header, color: colors.primary, ...cards.body}}>hey
    <div style={{color: "#834DB7"}}>cinema</div></div>)
}

const App = () => {
    return (
    <div>
    <MyHeader></MyHeader>
    <Search></Search>
    </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
