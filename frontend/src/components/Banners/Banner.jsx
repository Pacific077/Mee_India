import React from 'react'
import doc from "../../assets/BannerPics/doc.png"
import eventPlanner from "../../assets/BannerPics/EventPlanner.png"
import realEstate from "../../assets/BannerPics/realEstate.png"
import consultant from "../../assets/BannerPics/consultant.png"
import packers from "../../assets/BannerPics/packers.png"
import dresser from "../../assets/BannerPics/dresser.png"
import "./Banner.css"
import BannerCard from '../Card/BannerCard/BannerCard'
const Banner = () => {
  return (
    <div className='BannerCont'>
      <BannerCard title={"EVENT PLANNERS"} image={eventPlanner} bg="#6F61C0"/>
      <BannerCard title={"REAL ESTATE AGENTS"} image={realEstate} bg="#4477CE"/>
      <BannerCard title={"DOCTORS"} image={doc} bg="#40A2E3"/>
      <BannerCard title={"CONSULTANTS"} image={consultant} bg="#0E8388"/>
      <BannerCard title={"PACKERS & MOVERS"} image={packers} bg="#22A699"/>
      <BannerCard title={"HAIR DRESSERS"} image={dresser} bg="#34BE82"/>
   
    </div>
  )
}

export default Banner