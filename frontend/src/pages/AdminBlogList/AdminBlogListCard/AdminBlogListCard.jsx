import React from 'react'
import ClipSentence from '../../../utils/ClipSentence'
import ExtractDate from '../../../utils/ExtractDate'

const AdminBlogListCard = ({title,desc,date}) => {
  return (
    <div className='UserListCard'>
    <p className='userlistCardP'>{ClipSentence(title,3)}..</p>
    <p className='userlistCardP'>{ClipSentence(desc,6)}...</p>
    <p className='userlistCardP'>{ExtractDate(date)}</p>

  </div>
  )
}

export default AdminBlogListCard