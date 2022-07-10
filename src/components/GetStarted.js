import React from 'react'
import './Getstarted.css'
import LeftSideTitle from './LeftSideTitle'

const GetStarted = ({setcounter,counter}) => {
    const startVal = () => {
        setcounter(counter + 1)
    }
  return (
    <section className='started-page'>
        <div className='getstarted-image-container'>
            <LeftSideTitle />
            <img src='/images/startedpage.png' alt='start-img'/>
        </div>
        <div className='who-we-are-container'>
            <div className='get-started-container'>
                <h2>CHEES SAYS <span>A LOT ABOUT</span></h2>
                <h2>WHO WE ARE</h2>
                <div>
                    <button className='getstarted-btn' onClick={startVal}>Get Started <img src='/images/right-arrow.png' className='right-arrow'/></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted