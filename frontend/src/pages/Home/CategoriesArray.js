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
    service:[

    ]
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
    subCat: [
      {
        name:"Pet foods",
        img:"",
      },
      {
        name:"Pet toys",
        img:""
      }
    ],
    service:[
      "Sale of Pet Supplies",
      "Pet Food Sales",
      "Adoption Services",
      "Grooming Services",
      "Pet Boarding and Daycare",
      "Training and Obedience Classes",
      "Healthcare Products",
      "Pet Sitting and Walking Services",
      "Pet Photography",
      "Events and Workshops",
    ]
  },
  {
    count: 1000,
    category: "PG & Hostel",
    img: Schools,
    desc: "",
    subCat: [
      {
        name:"Boys Hostels/PGs",
        img:"",
      },
      {
        name:"Girls Hostels/PGs",
        img:"",
      },
      {
        name:"Co-living Spaces",
        img:"",
      },
      {
        name:"Long-Term Stay Hostels/PGs:",
        img:"",
      },
      {
        name:"Transit Hostels/PGs",
        img:"",
      },
      {
        name:"Student Hostels/PGs",
        img:"",
      },

    ],
    service:[
      "Accommodation Management",
      "Room Amenities",
      "Housekeeping Services",
      "Meals and Dining Services",
      "Laundry Facilities",
      "Internet and Wi-Fi",
      "Security Services",
      "Utilities Management",
      "Common Areas and Facilities",
      "Community Events and Activities",
      "Transportation Assistance",
      "Health and Safety Services",
      "Resident Support Services",
      "Environmental Sustainability Initiatives",
      "Parking Facilities"
    ]
  },
  {
    count: 1000,
    category: "Real Estate Agency",
    img: Schools,
    desc: "",
    subCat: [
      {
        name: "Residential Real Estate",
        img: "residential_real_estate_image_url"
      },
      {
        name: "Commercial Real Estate",
        img: "commercial_real_estate_image_url"
      },
      {
        name: "Rental and Leasing Services",
        img: "rental_and_leasing_services_image_url"
      },
      {
        name: "Property Management",
        img: "property_management_image_url"
      },
      {
        name: "New Construction and Development",
        img: "new_construction_and_development_image_url"
      },
      {
        name: "Luxury Real Estate",
        img: "luxury_real_estate_image_url"
      },
      {
        name: "Real Estate Consultancy",
        img: "real_estate_consultancy_image_url"
      },
      {
        name: "Land Sales and Development",
        img: "land_sales_and_development_image_url"
      },
      {
        name: "International Real Estate",
        img: "international_real_estate_image_url"
      }
    ],
    service:[
      "Property Listings",
      "Property Tours",
      "Client Consultations",
      "Market Analysis",
      "Negotiation",
      "Transaction Management",
      "Documentation and Paperwork",
      "Property Marketing",
      "Property Management Services",
      "Investment Consultation",
      "Relocation Assistance",
      "After-Sales Support"
    ]
  },
  {
    count: 1000,
    category: "Gym",
    img: gym,
    desc: "",
    subCat: [
      {
        name:"Men",
        img:"",
      },
      {
        name:"Women",
        img:"",
      },
      {
        name:"Unisex gym",
        img:"",
      },
      {
        name:"Supplements",
        img:"",
      },
      {
        name:"Rehabilitation Center",
        img:"",
      }
    ],
    service:[
      "On-Site Facilities Access",
      "Group Fitness Classes",
      "Personal Training Sessions",
      "Fitness Assessments",
      "Nutritional Guidance",
      "Online Resources",
      "Specialized Programs and Workshops",
      "Community Events and Activities",
      "Technology Integration",
      "Ongoing Support and Motivation"
    ]
  },
  {
    count: 1000,
    category: "Consultancy",
    img: consultants,
    desc: "",
    subCat: [
      {
        name: "Management Consulting",
        img: "management_consulting_image_url"
      },
      {
        name: "Financial Consulting",
        img: "financial_consulting_image_url"
      },
      {
        name: "Human Resources Consulting",
        img: "hr_consulting_image_url"
      },
      {
        name: "IT Consulting",
        img: "it_consulting_image_url"
      },
      {
        name: "Marketing Consulting",
        img: "marketing_consulting_image_url"
      },
      {
        name: "Legal Consulting",
        img: "legal_consulting_image_url"
      },
      {
        name: "Strategy Consulting",
        img: "strategy_consulting_image_url"
      },
      {
        name: "Environmental Consulting",
        img: "environmental_consulting_image_url"
      },
      {
        name: "Healthcare Consulting",
        img: "healthcare_consulting_image_url"
      },
      {
        name: "Supply Chain Consulting",
        img: "supply_chain_consulting_image_url"
      },
      {
        name: "Quality Management Consulting",
        img: "quality_management_consulting_image_url"
      },
      {
        name: "Risk Management Consulting",
        img: "risk_management_consulting_image_url"
      },
      {
        name: "International Business Consulting",
        img: "international_business_consulting_image_url"
      },
      {
        name: "Real Estate Consulting",
        img: "real_estate_consulting_image_url"
      },
      {
        name: "Education Consulting",
        img: "education_consulting_image_url"
      }
    ],
    service:[
      "Initial Consultation and Needs Assessment",
      "Proposal Development",
      "Agreement and Contracting",
      "Data Collection and Analysis",
      "Solution Development",
      "Presentation and Review",
      "Implementation Support",
      "Monitoring and Evaluation",
      "Closure and Follow-Up"
    ]
  },
  {
    count: 1000,
    category: "Event Organiser",
    img: eventorganizer,
    desc: "",
    subCat: [
      {
        name:"Wedding Plan",
        img:"",
      },
      {
        name:"Special function",
        img:"",
      },
      {
        name:"Birthday",
        img:"",
      },
      {
        name:"College Fest",
        img:"",
      },
      {
        name:"Party",
        img:"",
      },
      {
        name:"Inaugaration function",
        img:"",
      },
      {
        name:"Party",
        img:"",
      },
    ],
    service:[
      "Initial Consultation",
      "Event Planning",
      "Vendor Coordination",
      "Budget Management",
      "Venue Management",
      "Event Promotion and Marketing",
      "Guest Management",
      "On-Site Event Coordination",
      "Post-Event Follow-Up",
      "Customized Services",
      "Virtual Events"
    ]
  },
  {
    count: 1000,
    category: "Driving School",
    img: drivingschool,
    desc: "",
    subCat: [
      {
        name:"Car",
        img:""
      },
      {
        name:"Bike",
        img:"",
      },
      {
        name:"Scooty",
        img:"",
      },
      {
        name:"Truck",
        img:"",
      },
      {
        name:"JCB",
        img:""
      },
      {
        name:"Krane",
        img:""
      }
    ],
    service:[
      "Classroom Instruction",
      "Practical Driving Lessons",
      "Behind-the-Wheel Training",
      "Driving Simulator Training",
      "Mock Driving Tests",
      "Road Test Preparation",
      "Online Resources and Learning Materials",
      "License Application Assistance",
      "Additional Services",
      "Ongoing Support and Refresher Courses"
    ]
  },
  {
    count: 1000,
    category: "Packers&Movers",
    img: packersandmovers,
    desc: "",
    subCat: [
      {
        name: "Pre-Move Assessment",
        img: "pre_move_assessment_image_url",
      },
      {
        name: "Packing Services",
        img: "packing_services_image_url",
      },
      {
        name: "Loading and Transport",
        img: "loading_and_transport_image_url",
      },
      {
        name: "Unloading and Delivery",
        img: "unloading_and_delivery_image_url",
      },
      {
        name: "Unpacking Services",
        img: "unpacking_services_image_url",
      },
      {
        name: "Storage Services",
        img: "storage_services_image_url",
      },
      {
        name: "Specialized Handling",
        img: "specialized_handling_image_url",
      },
      {
        name: "Insurance Coverage",
        img: "insurance_coverage_image_url",
      },
      {
        name: "Customized Solutions",
        img: "customized_solutions_image_url",
      },
    ],
    service:[
      "Packing",
      "Loading",
      "Transportation",
      "Unloading",
      "Unpacking",
      "Assembly and Disassembly",
      "Specialized Handling",
      "Storage",
      "Insurance Coverage",
      "Customized Services",
      "Local and Long-Distance Moves",
      "Commercial Moves",
      "Residential Moves",
      "International Moves",
      "Consultation and Planning"
    ]
  },
  {
    count: 1000,
    category: "Courier Service",
    img: courierservice,
    desc: "",
    subCat: [
      {
        name: "Local Delivery",
        img: "local_delivery_image_url"
      },
      {
        name: "National Delivery",
        img: "national_delivery_image_url"
      },
      {
        name: "International Delivery",
        img: "international_delivery_image_url"
      },
      {
        name: "Express Delivery",
        img: "express_delivery_image_url"
      },
      {
        name: "Scheduled Delivery",
        img: "scheduled_delivery_image_url"
      },
      {
        name: "Special Handling",
        img: "special_handling_image_url"
      },
      {
        name: "Bulk Delivery",
        img: "bulk_delivery_image_url"
      },
      {
        name: "Last-Mile Delivery",
        img: "last_mile_delivery_image_url"
      },
      {
        name: "Warehousing and Fulfillment",
        img: "warehousing_fulfillment_image_url"
      },
      {
        name: "Reverse Logistics",
        img: "reverse_logistics_image_url"
      },
      {
        name: "Mail Services",
        img: "mail_services_image_url"
      },
      {
        name: "Document Delivery",
        img: "document_delivery_image_url"
      },
      {
        name: "Courier-on-Demand",
        img: "courier_on_demand_image_url"
      },
      {
        name: "Courier Tracking",
        img: "courier_tracking_image_url"
      },
      {
        name: "Customer Support",
        img: "customer_support_image_url"
      }
    ],
    service:[
      "Order Placement",
      "Pickup",
      "Packaging and Labeling",
      "Tracking and Documentation",
      "Transportation",
      "Transit and Delivery",
      "Proof of Delivery",
      "Notification and Confirmation",
      "Customer Support",
      "Value-Added Services"
    ]
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
    subCat: [
      {
        name: "Furniture Restoration",
        img: "restoration_image_url"
      },
      {
        name: "Repairing Damaged Furniture",
        img: "repair_image_url"
      },
      {
        name: "Upholstery Repair",
        img: "upholstery_image_url"
      },
      {
        name: "Wood Refinishing and Polishing",
        img: "refinishing_image_url"
      },
      {
        name: "Cabinet Repair and Refacing",
        img: "cabinet_repair_image_url"
      },
      {
        name: "Furniture Assembly and Disassembly",
        img: "assembly_image_url"
      },
      {
        name: "Furniture Modification and Customization",
        img: "modification_image_url"
      },
      {
        name: "Antique Furniture Conservation",
        img: "antique_conservation_image_url"
      },
      {
        name: "Reupholstering Furniture",
        img: "reupholstering_image_url"
      },
      {
        name: "Hardware Replacement and Repair",
        img: "hardware_replacement_image_url"
      },
      {
        name: "Furniture Cleaning and Maintenance",
        img: "cleaning_image_url"
      },
      {
        name: "On-Site Touch-Ups and Minor Repairs",
        img: "onsite_repairs_image_url"
      },
      {
        name: "Insurance Claim Services",
        img: "insurance_claim_image_url"
      },
      {
        name: "Furniture Care and Restoration Products",
        img: "care_products_image_url"
      }
    ],
    service:[
      "On-Site Repairs",
      "Pick-Up and Delivery Service",
      "Workshop Repairs",
      "Mobile Repair Units",
      "Consultation and Assessment",
      "Customization and Restoration Services",
      "Online Platforms",
      "Educational Workshops and DIY Resources",
      "Warranty and Guarantee",
      "Follow-Up and Customer Support"
    ]
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
