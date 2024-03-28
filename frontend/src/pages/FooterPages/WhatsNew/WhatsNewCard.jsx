import React from 'react'
import './WhatsNewCard.css'
import banquet from "../../../assets/banquet.jpg"

const WhatsNewCard = ({number}) => {
  return (
    <div className='WhatsNewMainCardDiv'>
      {/* <div className='cardNumbering'>{number}</div> */}
      <div className='WhatsNewCardImage'>
        <img src={banquet} alt='' className='whatsNewImage'></img>
      </div>
      <div className='whatsNewcardContent'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem nostrum aut deserunt adipisci perferendis, harum hic cumque nihil ut aperiam debitis laboriosam totam autem quae! Commodi laboriosam fuga officiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus dolorem, ad minus eius debitis autem cupiditate maiores fugiat possimus vero, sit temporibus, quod quo dolorum quae dignissimos porro iste.
      </div>
    </div>
  )
}

export default WhatsNewCard
