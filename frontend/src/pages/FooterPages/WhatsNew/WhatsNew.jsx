import React from 'react'
import './WhatsNew.css'

import WhatsNewCard from './WhatsNewCard'

const WhatsNew = () => {
  return (
    <div className='whatNewMainContainer'>
        <div className='newFeaturesHeading'>New Features</div>
        <div className='whatsNewMainDiv'>
            <WhatsNewCard number={1}/>
            <WhatsNewCard number={2}/>
            <WhatsNewCard number={3}/>
        </div>
    </div>
   
  )
}

export default WhatsNew
