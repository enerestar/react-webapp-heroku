import React from 'react';
import ReactDOM from 'react-dom';
import Search from './js/components/search';
import { colors, fonts, header } from './js/components/style';

const MyHeader = (props) => {
    return (<div onClick={(e) => {
        window.location.href = '/';
    }}><div style={{ ...fonts.header, ...header.body, color: colors.primary }}>hey
    <div style={{color: colors.secondary}}>cinema</div></div></div>)
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
