import React from 'react'
import "./Banner.css"
import BannerCard from '../Card/BannerCard/BannerCard'
const Banner = () => {
  return (
    <div className='BannerCont'>
      <BannerCard bg="#6F61C0"/>
      <BannerCard bg="#4477CE"/>
      <BannerCard bg="#40A2E3"/>
      <BannerCard bg="#0E8388"/>
      <BannerCard bg="#22A699"/>
      <BannerCard bg="#34BE82"/>
   
    </div>
  )
}

export default Banner