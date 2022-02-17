import React, { useState } from 'react';
import '../styles/SocialIcons.css';

function SocialIcons() {
  const [bgClr, setBgClr] = useState('white');

  return (
    <ul className='social-list'>
      <li className='icon'>
        <a href='#'>
          <i className='fab fa-facebook-f facebook'></i>
        </a>
      </li>
      <li className='icon'>
        <a href='#'>
          <i className='fab fa-instagram instagram'></i>
        </a>
      </li>
      <li className='icon'>
        <a href='#'>
          <i className='fab fa-twitter twitter'></i>
        </a>
      </li>
      <li className='icon'>
        <a href='#'>
          <i className='fab fa-youtube youtube'></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
