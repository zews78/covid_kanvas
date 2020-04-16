import React from 'react';

import './post.css';

const post = (props) => (
    <article className="Post">
        <h1 >{props.state}</h1>
        <div className="Info">
            <div className="Author">{props.activeCases}</div>
        </div>
    </article>
);

export default post;