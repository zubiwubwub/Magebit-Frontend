import React, { useState } from 'react';

import InputForm from './InputForm';
import '../styles/MainContent.css';
import SocialIcons from './SocialIcons';

function MainContent(props) {
  const [style, setStyle] = useState({ display: 'block' });

  const validationHandler = (enteredValidationData) => {
    const validationData = {
      ...enteredValidationData,
      id: Math.random().toString(),
    };

    setStyle({ display: 'none' });

    return validationData;
    console.log(validationData);
  };

  const submitHandler = (props) => {
    props.validationData.validation === true
      ? setStyle({ display: 'none' })
      : setStyle({ display: 'block' });
    console.log('this happened');
  };

  return (
    <main>
      <div className='container'>
        <InputForm onClick={submitHandler} style={style} />
        <div className='social-container'>
          <span className='line'></span>
          <SocialIcons />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
