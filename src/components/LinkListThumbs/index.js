import React from 'react';
import './index.css';

const LinkListThumbs = props =>
  <nav className={`LinkListThumbs ${props.className}`}>
    {props.title && <h5 className='title'>{props.title}</h5>}
    <div>
    {
      props.posts.sort().map((item,index) =>
        <a key={index} href={`/all/${index}`}>
          <img src={item.thumbnail} alt={item.title}/>
          <span>{item.title}</span>
        </a>
      )
    }
    </div>
  </nav>

export default LinkListThumbs;
