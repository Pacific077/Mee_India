import React from 'react'
import t1 from "../../assets/t1.png"
import "./BusinessDashboardSpecific.css"
import BussinessDashIconsCard from '../../components/Card/BussinessDashIconsCard/BussinessDashIconsCard'
import CompleteBusinessDetails from '../../components/CompleteBusinessDetails/CompleteBusinessDetails'
const BusinessDashboardSpecific = () => {
  return (
    <div className='BusinessDashboardSpecific'>
        <div className="BusinessDashSpecBanner">
            <div className="BusinessDashSpecBannerLeft">
                <h1 className='BusinessDashSpecBannerHead'>Promote Your Business</h1>
                <h1 className='BusinessDashSpecBannerHead2'>& Rank ahead Your Competition</h1>
                <button className='btnPrim btn-lg'>Advertise Now</button>
            </div>
            <div className="BusinessDashSpecBannerRight">
                <img src={t1} alt="" />
            </div>
        </div>
        <div className="BusinessDashSpeScore">
            <div className="ScoreAndDesc">

            <div className="BussinessScorePercent">45%</div>
            <div className="BussinessScoreDesc">
                <p className='BussinessScoreDescHead'>Busineess Score</p>
                <p className='BussinessScoreDescInfo'>Reach Out to more Customer</p>
            </div>
            </div>
            <button className="BussinessScorebtn">Increase Score</button>
        </div>
        <div className="BusinessDashSpecDetails">
            <p className="BusinessDashSpecDetailsHead">
                Quick Link
            </p>
            <div className="BusinessDashSpecDetailsIconCont">
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                <BussinessDashIconsCard/>
                
            </div>
        </div>
        <CompleteBusinessDetails/>
    </div>
  )
}

export default BusinessDashboardSpecific