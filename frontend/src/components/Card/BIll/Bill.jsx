import React from "react";
import "./Bill.css";
import BIllIcon from "../BillIcons/BIllIcon";
const Bill = ({ name, Desc, SubCat }) => {
  return (
    <div className="billCont">
      <div className="billLeftcont">
        <h2 className="billLeftHead">{name}</h2>
        <p>{Desc}.</p>
      </div>
      <div className="billRightcont">
        {SubCat.map((ele,ind) => {
          return <div key={ind} className='BillIcon'>
            <img src={ele.incon} alt="" srcset="" className='billIconImg' />
            <p className='billIconTitle'>{ele.name}</p>
        </div>;
        })}
      </div>
    </div>
  );
};

export default Bill;
