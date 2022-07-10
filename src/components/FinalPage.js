import React from 'react'
import './FinalPage.css'
import LeftSideTitle from './LeftSideTitle'

const FinalPage = ({counter,setcounter}) => {
  return (
    <section className='final-page'>
        <div className='final-left-side'>
            <LeftSideTitle />
            <img src='/images/finalimage.png' className='final-image' alt='final-left-image'/>
        </div>
        <div className='final-right-side'>

                <img src='/images/rocket.png' alt='rocket'/>
                <p className='final-text'>Onboarding completed!</p>
        </div>
    </section>
  )
}

export default FinalPage