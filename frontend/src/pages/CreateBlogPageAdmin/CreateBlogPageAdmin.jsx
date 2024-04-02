import React, { useState } from 'react'
import "./CreateBlogPageAdmin.css"
import ReactLoading from "react-loading";
import CountWords from '../../utils/CountWords'
import { ImageToUrl } from '../../utils/ImagetoUrl'
import { toast } from 'react-toastify';
import isEmpty from '../../utils/IsEmpty';
import { CreateBlogApi } from '../../apis/BlogApis';


const CreateBlogPageAdmin = () => {
  const [title,SetTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [imgurl,setImgurl] = useState('')
  const [loading, setLoading] = useState(false);

  const handleCreateBlog = async ()=>{
    try {
    if(CountWords(title)<10){
      toast.warning("Title must contain 10 words")
      return;
    }else if(CountWords(title)>20){
      toast.warning("Title cant contain more than 20 words")
      return;
    }else if(CountWords(desc)<100){
      toast.warning("Description must contain 100 words")
      return;
    }else if(CountWords(desc)>500){
      toast.warning("Description cant contain more than 500 words")
      return;
    }else if(isEmpty(imgurl)){
      toast.warning("Please upload an image")
      return;
    }
    const resp = await CreateBlogApi({title,description:desc,BlogImage:imgurl})
    console.log("res",resp)
    if(resp.status===200){
      toast.success("Blog Created Succesfully")
    }

  } catch (error) {
      toast.error(error.message)
  }
  }

  const HandleFileChange =async (e)=>{
    const files = Array.from(e.target.files);
    setLoading(true)
    const resp = await ImageToUrl(files);
    const Item = resp[0];
    setLoading(false)
    setImgurl(Item)
  }
  return (
    <div className='CreateBlogPageAdmin'>
      <h1>Create a Blog</h1>
      <div className="createBlogForm">
        <div className="blogInputTitle">
        <h2>Title</h2>
        <input type="text" value={title} onChange={(e)=>SetTitle(e.target.value)} placeholder='Enter your Title' />
        </div>
        <div className="blogInputDesc" >
        <h2>Description</h2>
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)}  placeholder='Enter your Description'></textarea>
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
        <div className="bloguploadImage">
          <h2>Uplaod Your Image</h2>
          <input style={{width:"30%"}} onChange={HandleFileChange} type="file" value="" />
        </div>

        <button onClick={handleCreateBlog} className="createBlogbtn">Create</button>
      </div>
    </div>
  )
}

export default CreateBlogPageAdmin