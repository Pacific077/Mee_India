import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { BusienessEdit, findByID } from "../../../apis/BusinessApi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import './ServiceAdd.css'
import CategoriesArray from "../../Home/CategoriesArray";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Services = () => {
  const { BusinessId } = useParams();
  const navigate = useNavigate();

  const [currBusiness, setCurrBusiness] = useState({});
  const [service, setServices] = useState([]);

  const fetchBusinessByID = async () => {
    try {
      const resp = await findByID({ bussinessId: BusinessId });
      if (resp.status === 200) {
        setCurrBusiness(resp.data.businessDetail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusinessByID();
  }, []);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setServices((prevServices) => [...prevServices, value]);
    } else {
      setServices((prevServices) =>
        prevServices.filter((service) => service !== value)
      );
    }
  };

  const handleClick = async () => {
    try {
      // You can now use the `service` state containing selected services
      console.log("Selected Services:", service); 
      const Data = {
        businessId: BusinessId,
        Services: service // Pass the selected services to your API call
      };
      console.log("Data", Data);
      const resp = await BusienessEdit(Data);
      if (resp.status === 200) {
        toast.success("Selected Services Added Successfully");
        navigate(`/business-dashboard/${BusinessId}`);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <h1 className="BusinessEditHeading">Add Service</h1>
      <div className="BusinessServiceAddForm">
        <FormGroup>
          {CategoriesArray.find(cat => cat.category === currBusiness.mainCategory)?.service?.map((cat, index) => {
            if (!currBusiness.Services.includes(cat)) {
            return (
                <FormControlLabel
                key={index}
                control={<Checkbox onChange={handleCheckboxChange} value={cat} />}
                label={cat}
                />
            );
            } else {
            return null; // Don't render the service option if it's already included
    }
          })}
        </FormGroup>
      </div>
      <button className="btnPrim btn-lg" onClick={handleClick}>Save</button>
    </>
  );
};

export default Services;
