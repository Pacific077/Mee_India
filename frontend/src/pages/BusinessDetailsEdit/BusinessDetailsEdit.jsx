import React, { useEffect, useState } from 'react'
import "./BusinessDetailsEdit.css"
import BusinessNamEdit from './BusinessNameEdit/BusinessNamEdit'
import BusinessAddPhotos from './BusinessAddPhotos/BusinessAddPhotos'
import { useParams } from 'react-router-dom'
import Catalouge from './Catalouge/Catalouge'
import Websites from './Websites/Websites'
import Offers from './Offers/Offers'
const BusinessDetailsEdit = () => {
  const {edit} = useParams()
  const [editName,setEditname] = useState(false)
  const [editPhotos,setEditPhotos] = useState(false)
  const [addCatalouge,setAddCatalouge] = useState(false)
  const [addWebsite,setAddWebsite] = useState(false)
  const [addOffer,setAddOffers] = useState(false)
  useEffect(()=>{
    
    if(edit==='editName'){
      setEditname(true)
    }else if(edit==="editPhoto"){
      setEditPhotos(true)
    }else if(edit==="Catalouge"){
      setAddCatalouge(true)
    }else if(edit==="website"){
      setAddWebsite(true)
    }else if(edit==="Offers"){
      setAddOffers(true)
    }
  },[])
  return (
    <div className='BusinessDetailsEditPage'>
        <div className="businessDetailsEditForm">
            {editName&& <BusinessNamEdit/> }
            {editPhotos&&<BusinessAddPhotos/>}
            {addCatalouge&&<Catalouge/>}
            {addWebsite&&<Websites/>}
            {addOffer&&<Offers/>}
        </div>
    </div>
  )
}

export default BusinessDetailsEdit