import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './js/components/search';
import Result from './js/components/result';
import { colors, fonts, header } from './js/components/style';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

const MyHeader = (props) => {
    return (<div onClick={(e) => {
        window.location.href = '/';
    }}><div style={{ ...fonts.header, color: colors.primary, ...header.body}}>hey
    <div style={{color: colors.secondary}}>cinema</div></div></div>)
}

const App = () => {
    return (
    <div>
    <MyHeader></MyHeader>
    <Search></Search>
    <Result></Result>
    </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
