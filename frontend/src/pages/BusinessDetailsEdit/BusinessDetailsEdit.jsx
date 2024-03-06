import React, { useEffect, useState } from 'react'
import "./BusinessDetailsEdit.css"
import BusinessNamEdit from './BusinessNameEdit/BusinessNamEdit'
import BusinessAddPhotos from './BusinessAddPhotos/BusinessAddPhotos'
import { useParams } from 'react-router-dom'
const BusinessDetailsEdit = () => {
  const {edit} = useParams()
  const [editName,setEditname] = useState(false)
  const [editPhotos,setEditPhotos] = useState(false)
  useEffect(()=>{
    
    if(edit==='editName'){
      setEditname(true)
    }else if(edit==="editPhoto"){
      setEditPhotos(true)
    }
  },[])
  return (
    <div className='BusinessDetailsEditPage'>
        <div className="businessDetailsEditForm">
            {editName&& <BusinessNamEdit/> }
            {editPhotos&&<BusinessAddPhotos/>}
        </div>
    </div>
  )
}

export default BusinessDetailsEdit