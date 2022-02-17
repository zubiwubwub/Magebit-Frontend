import React from 'react';
import '../styles/ImgBar.css';
import background from '../assets/image_summer.png';
function ImgBar() {
  return (
    <div className='ImgBar'>
      <img src={background} alt='background summer' />
    </div>
  );
}

export default ImgBar;
