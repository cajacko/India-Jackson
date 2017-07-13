import React from 'react';
import style from 'components/FourOhFour/FourOhFour.style';

const text = 'Woops, I couldn\'t find a page here :(';

const FourOhFour = () => (
  <div style={style.wrapper}>
    <h1 style={style.heading}>404</h1>
    <p style={style.text}>{text}</p>
  </div>
);

export default FourOhFour;
