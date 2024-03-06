import React, { useState } from 'react'
import "./Catalouge.css"
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { ImageToUrl } from '../../../utils/ImagetoUrl'
import { useNavigate, useParams } from 'react-router-dom'
import { BusienessEdit } from '../../../apis/BusinessApi';
const Catalouge = () => {
  const [ImageArr,setImageArr] = useState([])
  const {BusinessId} =useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const HandleFileChange =async (e)=>{
    const files = Array.from(e.target.files);
    setLoading(true)
    const resp = await ImageToUrl(files);
    const Item = resp[0];
    setLoading(false)
    setImageArr((prev) => [...prev, Item])
  }
  const handleSubmit=async ()=>{
    try{
      const Data = {
        Catalouge:ImageArr,businessId:BusinessId
      }
      console.log("Data",Data);
      const resp = await BusienessEdit(Data);
      if(resp.status===200){
        toast.success("Catalouge Added Successfully")
        navigate(`/business-dashboard/${BusinessId}`)
      }
    }catch(er){
      console.log(er.message)
      toast.error("Something Went Wrong")
    }
  }
  return (
    <>
    <h1 className='BusinessEditHeading'>Add Catalouges </h1>
    <div className="CatalougeEditFormDesc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga etur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. .</p>
    </div>
    {loading && (
          <div className="Loading" style={{ width: "100%" }}>
            <ReactLoading
              type="spokes"
              color="purple"
              height={120}
              width={120}
            />
          </div>
        )}
    <div className="BusinessEditCatalougeCont">
      <div className="AddCatalougeCard">
        <p className='plusSign'>+</p>
        <p>Add Photo</p>
        <input type="file" className='BussinessEditCatalougeFile' onChange={HandleFileChange} />
      </div>
      <div className="AddCatalougeCard">
        <p className='plusSign'>+</p>
        <p>Add Photo</p>
        <input type="file" className='BussinessEditCatalougeFile'onChange={HandleFileChange} />
      </div>
      <div className="AddCatalougeCard">
        <p className='plusSign'>+</p>
        <p>Add Photo</p>
        <input type="file" className='BussinessEditCatalougeFile'onChange={HandleFileChange} />
      </div>
    </div>
    <button className='btnPrim btn-lg' onClick={handleSubmit}>Save</button>
    </>
  )
}

export default Catalouge