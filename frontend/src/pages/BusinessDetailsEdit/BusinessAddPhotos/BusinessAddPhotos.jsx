import React from 'react'
import { IoCameraSharp } from "react-icons/io5";
import "./BusinessAddPhotos.css"
const BusinessAddPhotos = () => {
    return (
        <>
            <h1 className='BusinessEditHeading'> Photo Gallery </h1>
            <div className="BusinessAddPhotosdesc">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, asperiores itaque tempora iusto impedit voluptas necessitatibus repellendus. Alias voluptates debitis aut voluptatum qui inventore dolorem iste iure aperiam, rem perferendis sed maxime commodi voluptate vitae accusantium eum at neque cupiditate fugiat odio repudiandae dolorum culpa fugit! Facilis eligendi dolorum ipsam.</p>
            </div>
            <div className="BusinessAddphotodiv">
                <div className="BusinessAddphotoBtnCont">
                    <IoCameraSharp className='businessCameraIcon' />
                    <p>Upload Photos Of Your Business</p>
                    <input type="file" className='BusinessEditInptFile' />
                </div>
                <div className="BusinessAddPhotoInfo">
                    <p>Recommended Size :1000px x 1000px</p>
                </div>
            </div>
            <button className='btnPrim btn-lg'>Save</button>
        </>
    )
}

export default BusinessAddPhotos