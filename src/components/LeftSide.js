import React from 'react'
import './LeftSide.css'
import LeftSideTitle from './LeftSideTitle';

const LeftSide = () => {
  return (
    <section className='left-side'>
      <LeftSideTitle />
      <div className='image-container'>
        <img src='/images/pinformation-image.png' className='image'/>
      </div>
      <div className='text-container'>
        <p className='image-text'>“When you see a good move,<br></br>look for a better one.”</p>
        <p className='author'>-Emanuel Lasker</p>
      </div>
    </section>
  );
}

export default LeftSide