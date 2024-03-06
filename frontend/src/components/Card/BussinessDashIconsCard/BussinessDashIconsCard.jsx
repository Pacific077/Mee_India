import React from 'react'
import "./BussinessDashIconsCard.css"
const BussinessDashIconsCard = ({tag,col,Icon}) => {
  return (
    <div className='BussinessDashIconsCard'>
      <div className="BusinessDashIconCont" style={{ backgroundColor: `${col}` }}>
        <Icon/>
      </div>
      <p className="BussinessDashIconsDesc">{tag}</p>

    </div>
  )
}

export default BussinessDashIconsCard