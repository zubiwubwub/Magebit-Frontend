import React from 'react';
import Header from './Header.js';
import '../styles/ContentBar.css';
import MainContent from './MainContent.js';

function ContentBar() {
  return (
    <div className='ContentBar'>
      <Header />
      <MainContent />
    </div>
  );
}

export default ContentBar;
