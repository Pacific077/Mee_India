import React, { useContext, useEffect, useState } from "react";
import "./BussinessList.css";
import { useLocation, useParams } from "react-router-dom";
import CatContext from "../../context/CategoryContext.jsx";
import BussinessListCard from "../../components/Card/BussinessListCard/BussinessListCard";
import axios from "axios";

import { SearchOnClickApi, SearchOnTypeApi } from "../../apis/BusinessApi.js";
import { toast } from "react-toastify";
import isEmpty from "../../utils/IsEmpty.jsx";


const BussinessList = () => {
  const { mainCategory, district, subCat } = useParams();
  const CatCon = useContext(CatContext);
  const { latitude, longitude } = CatCon;

  const [businessArray, setBusinessArray] = useState([]);
  const searchParams = new URLSearchParams(useLocation().search);
  const searchQuery = searchParams.get('search');
  const SearchOnCLick = async () => {
    try {
      const resp = await SearchOnClickApi({
        district,
        mainCategory,
        latitude,
        longitude,
        subCat,
      });
      if (resp.status === 200) {
        console.log(resp);
        setBusinessArray(resp.data.businesses);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response.status === 400) {
        error.response.data.err.map((msg) => {
          toast.error(msg);
        });
      } else if (axios.isAxiosError(error) && error.response.status === 401) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  const TextSearch = async  ()=>{
    try {
      console.log("Search query:", searchQuery);
      const resp = await SearchOnTypeApi({ query: searchQuery.toString() });
      setBusinessArray(resp.data.result)
      console.log("resp on search",resp)
    } catch (error) {
      console.log("err")
    }
  }
  useEffect(() => {
    if(!searchQuery){
      SearchOnCLick();

    }else{
      TextSearch();
    }
  }, [searchQuery]);

  //use it to find the list

  return (
    <div className="ListPageContainer">
      
      <div>
        <h1 className="ListPageHeading">
          Top {subCat !== "null" ? subCat : ""} {searchQuery?searchQuery.toString():mainCategory} in {district}{" "}
        </h1>
      </div>
      <div className="ListContainer">
        {businessArray.map((bus,ind) => (
          <BussinessListCard
          key={ind}
            bussinessId={bus._id}
            name={bus.title}
            ratingCnt={bus.ratingCount}
            ratersCnt={bus.reviews?.length === 0 ? 1 : bus.reviews?.length}
            address={bus.address}
            contact={bus.bussinessContact}
            owner={bus.owner}
          />
        ))}
        {/* <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/>
                <BussinessListCard/> */}
      </div>
    </div>
  );
};

export default BussinessList;
