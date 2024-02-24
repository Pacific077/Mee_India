import React from 'react'
import './BussinessList.css'
import { useParams } from 'react-router-dom'
import BussinessListCard from '../../components/Card/BussinessListCard/BussinessListCard'

const BussinessList = () => {

    const {mainCategory,district} = useParams()

    //use it to find the list

    return (
        <div className='ListPageContainer'>
            <div>
                <h1 className='ListPageHeading'>Top {mainCategory}s in {district} </h1>
            </div>
            <div className='ListContainer'>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
            </div>
        </div>
    )
}

export default BussinessList