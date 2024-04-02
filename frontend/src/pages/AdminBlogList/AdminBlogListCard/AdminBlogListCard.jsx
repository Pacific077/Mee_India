import React from 'react'
import ClipSentence from '../../../utils/ClipSentence'
import {useNavigate} from "react-router-dom"
import ExtractDate from '../../../utils/ExtractDate'

const AdminBlogListCard = ({title,desc,date,id}) => {
  const navigate = useNavigate()
  return (
    <div className='UserListCard' onClick={()=>navigate(`/admin/blogList/specific/${id}`)} >
    <p className='userlistCardP'>{ClipSentence(title,3)}..</p>
    <p className='userlistCardP'>{ClipSentence(desc,6)}...</p>
    <p className='userlistCardP'>{ExtractDate(date)}</p>

  </div>
  )
}

export default AdminBlogListCard