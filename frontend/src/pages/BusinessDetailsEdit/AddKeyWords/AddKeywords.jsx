import React, { useEffect, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import {useParams} from "react-router-dom"
import "./AddKeywords.css"
import {toast} from "react-toastify"
import { RiDeleteBin6Line } from "react-icons/ri";
import { AddKeywordsApi, DelkeywordWithString, getAllKeywords } from '../../../apis/BusinessApi'
import isEmpty from '../../../utils/IsEmpty';
const AddKeywords = () => {
  const [keywordArr,setKeywordarr] = useState([])
  const [keywordToadd,setKeyWordToadd] = useState('')
  const {BusinessId} = useParams()

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const resp = await getAllKeywords({ id: BusinessId });
        setKeywordarr(resp.data.keywords)
        // console.log("Respkey", resp);
      } catch (error) {
        console.error("Error fetching keywords:", error);
      }
    };
  
    fetchKeywords(); 
  
  }, [])
  const handleKeywordadd =async ()=>{
    try {
      if(isEmpty(keywordToadd)){
        toast.warning("Keyword cant be empty");
        return
      }else if(keywordToadd.includes(" ")){
        toast.warning("Its keyword not key'sentence'");
        return;
      }else{
        const resp = await AddKeywordsApi({ id:BusinessId,keyword:keywordToadd});
        if(resp.status===200){
          toast.success("Keyword added successfully")
          setKeywordarr([...keywordArr, keywordToadd]);
        }
      }
    } catch (error) {
      // console.log("ere",error.response.data.message)
      toast.error(error.response.data.message)
    }
  }
  const handleDelete =async (event) => {
    try {
      const item = event.currentTarget;
      const str= item.textContent
      const resp = await DelkeywordWithString({string:str,id:BusinessId});
      console.log("deldteresp",resp)
      if(resp.status===200){
        toast.success("Delete successfull")
        item.classList.add('flyAway')
        await new Promise(resolve => setTimeout(resolve, 1000));
        setKeywordarr(keywordArr.filter(keyword => keyword !== str));
        item.classList.remove('flyAway')
      }
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };
  
  return (
    <>
    <h1 className='BusinessEditHeading'>Add Keywords for your business </h1>
    <div className="BusinessNameEditFormDesc">
    <p>Enhance SEO by integrating strategic keywords tailored to your business.</p>
  <p>Facilitate customer discovery through relevant keywords, elevating your online visibility.</p>
  <p>Boost online presence with targeted keywords, improving your business's digital reach.</p>
    </div>
    <div className="BusinessNameEditForm">
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Current Keywords</label>
        <div className="keywordCont">

        {keywordArr.map((ele,ind)=>{
          return(
            <div onClick={handleDelete} className='KeywordItems' id="keyid" key={ind}>
              <RiDeleteBin6Line className='Deliconkeyword'/>
              <p className='turngray'>{ele}</p>
              </div>
            )
          })}
          </div>
        {/* <input type="text" /> */}
      </div>
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Add Upto 10 keywords</label>
        <div className='addkeywordinp' >

        <input value={keywordToadd} onChange={(e)=>setKeyWordToadd(e.target.value)} type="text" />
        <AiOutlineSend onClick={handleKeywordadd} className='sendbtnkeywrd' />
        </div>
      </div>
    </div>
    {/* <button className='btnPrim btn-lg'>Add</button> */}
    </>
  )
}

export default AddKeywords