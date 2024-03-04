import cook1 from "../../assets/cook1.jpg";
import doc from "../../assets/doc.jpg";
import saloons from "../../assets/saloons.jpg";
import Schools from "../../assets/school.jpg";
import hotel from "../../assets/hotels.jpg";
import gym from "../../assets/gym.jpg";
import spa from "../../assets/spa.jpg";
import petshop from "../../assets/petshop.jpg";
import contractors from "../../assets/contractors.jpg";
import consultants from "../../assets/consultants.jpg";
import drivingschool from "../../assets/drivingschool.jpg";
import eventorganizer from "../../assets/eventorganizer.jpg";
import rentandhire from "../../assets/rentandhire.jpg";
import packersandmovers from "../../assets/packersandmovers.jpg";
import courierservice from "../../assets/courierservice.jpg";
import homedecor from "../../assets/homedecor.jpg";
import hospital from "../../assets/hospital.jpg";
import estateagent from "../../assets/estateagent.jpg";

const CategoriesArray = [
  {
    count: 1000,
    category: "Restraunt",
    img: cook1,
    desc: "",
    subCat: [],
  },
  {
    count: 1000,
    category: "Hotel",
    img: hotel,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Salon",
    img: saloons,
    desc: "",
    subCat: [
      {
      name: "Mens",
      img: "",
    },
      {
      name: "Womens",
      img: "",
    },{
      name: "Unisex",
      img: "",
    },
  ],
  },
  {
    count: 1000,
    category: "Education",
    img: Schools,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Rent & Hire",
    img: rentandhire,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Medical",
    img: doc,
    desc: "",
    subCat: [
      {
        name: "Pharmacy",
        img: "",
      },
      {
        name: "Clinic",
        img: "",
      },
      {
        name: "Hospital",
        img: "",
      },
    ],
  },
  {
    count: 1000,
    category: "Contractor",
    img: contractors,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Pet Shop",
    img: petshop,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "PG&Hostel",
    img: Schools,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Real Estate Agency",
    img: Schools,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Gym",
    img: gym,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Consultancy",
    img: consultants,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Event Organiser",
    img: eventorganizer,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Driving School",
    img: drivingschool,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Packers&Movers",
    img: packersandmovers,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Courier Service",
    img: Schools,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "IT Repair Service",
    img: Schools,
    desc: "",
    subCat: [""],
  },
  {
    count: 1000,
    category: "Furniture Repair Service",
    img: Schools,
    desc: "",
    subCat: [""],
  },
  // {
  //   count: 1000,
  //   category: "Jewellery Showroom",
  //   img: Schools,
  //   desc: "",
  //   subCat: [""],
  // },
  // {
  //   count: 1000,
  //   category: "Photo Studio",
  //   img: Schools,
  //   desc: "",
  //   subCat: [""],
  // },
  // {
  //   count: 1000,
  //   category: "Banquet Hall",
  //   img: Schools,
  //   desc: "",
  //   subCat: [""],
  // },{
  //   count: 1000,
  //   category: "Wedding Dresses for Rent",
  //   img: Schools,
  //   desc: "",
  //   subCat: [""],
  // },
  // {
  //   count: 1000,
  //   category: "C-service",
  //   img: courierservice,
  //   desc: "",
  //   subCat: [""],
  // },
  // {
  //   count: 1000,
  //   category: "H-Decor",
  //   img: homedecor,
  //   desc: "",
  //   subCat: [""],
  // },
];

export default CategoriesArray;
