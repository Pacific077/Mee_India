import React, { useEffect, useState } from 'react'
import "./BusinessDetailsEdit.css"
import BusinessNamEdit from './BusinessNameEdit/BusinessNamEdit'
import BusinessAddPhotos from './BusinessAddPhotos/BusinessAddPhotos'
import { useParams } from 'react-router-dom'
import Catalouge from './Catalouge/Catalouge'
import Websites from './Websites/Websites'
import Offers from './Offers/Offers'
import Services from './Services/ServiceAdd'
import ManageReviews from './ManageReviews/ManageReviews'

const BusinessDetailsEdit = () => {
  const {edit} = useParams()
  const [editName,setEditname] = useState(false)
  const [editPhotos,setEditPhotos] = useState(false)
  const [addCatalouge,setAddCatalouge] = useState(false)
  const [addWebsite,setAddWebsite] = useState(false)
  const [addOffer,setAddOffers] = useState(false)
  const [addService,setAddService] = useState(false)
  const [Reviews,setReviews] = useState(false)

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
    else if(edit==="Services"){
      setAddService(true)
    }
    else if(edit==="Reviews"){
      setReviews(true)
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
            {addService&&<Services/>}            
            {Reviews &&<ManageReviews/>}
        </div>
    </div>
  )
}

export default BusinessDetailsEdit