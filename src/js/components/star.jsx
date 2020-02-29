import React from 'react';

export const Star = (props) => {
    const stars = [];
    for (let i=0; i< props.length; i ++) {
        stars.push(<span>☆</span>)
    }
    return (<div className="rating">{stars}</div>);
}