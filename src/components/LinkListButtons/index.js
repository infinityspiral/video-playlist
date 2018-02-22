import React from 'react';
import './index.css';

const LinkListButtons = props =>
  <nav className={`LinkListButtons ${props.className}`}>
    {props.title && <h5 className='title'>{props.title}</h5>}
    {
      props.categories.sort().map((item,index) =>
        <a key={index} className='button tag'
           href={`/${item}`}>
          <span>{item}</span>
        </a>
      )
    }
  </nav>

export default LinkListButtons;
