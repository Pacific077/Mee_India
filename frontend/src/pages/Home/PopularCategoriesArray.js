import cook1 from "../../assets/cook1.jpg";
import doc from "../../assets/doc.jpg";
import saloons from "../../assets/saloons.png";
import Schools from "../../assets/school.png";
import hotel from "../../assets/hotels.png";
import hostel from "../../assets/hostel.png";
import realestateagency from "../../assets/real-estate-agency.png";
import analysisservices from "../../assets/analysisservices.png";
import door from "../../assets/door.png";
import gym from "../../assets/gym.png";
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

const PopularCategoriesArray = [
  {
    count: 1000,
    category: "Restraunt",
    img: cook1,
    desc: "",
    subCat: [],
    service:[
      "Dine-In Service",
      "Takeaway or Takeout Service",
      "Delivery Service",
      "Drive-Through Service",
      "Reservation Service",
      "Catering Service",
      "Special Events and Promotions",
      "Online Ordering and Payment",
      "Customer Loyalty Programs",
      "Feedback and Customer Service"
    ]
  },
  {
    count: 1000,
    category: "Hotel",
    img: hotel,
    desc: "",
    subCat: [
      {
        name:"Luxury Hotels",
        img:""
      },
      {
        name:"Resorts",
        img:""
      },
      {
        name:"Villas",
        img:""
      },
      {
        name:"Bar and Lounges",
        img:""
      },
      

    ],
    service:[
      "Accommodation",
      "Check-In and Check-Out Services",
      "Room Amenities",
      "Housekeeping Services",
      "Dining Services",
      "Concierge Services",
      "Recreational Facilities",
      "Business Services",
      "24/7 Front Desk Assistance",
      "Security Services",
      "Specialized Services",
      "Entertainment and Events",
      "Housekeeping and Laundry Services",
      "In-Room Entertainment",
      "Special Occasion Services",
      "Honeymoon Packages",
      "Membership Benefits and Privileges",
      "Swimming Pools and Jacuzzis",
      "Fitness Centers and Gyms",
      "Valet Parking",
      "Wedding Venues and Services"
    ]
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
  service:[
      "In-Salon Appointments",
      "Mobile Salon Services",
      "Virtual Consultations",
      "Subscription Services",
      "Group Bookings and Events",
      "Education and Workshops",
      "Product Sales and Recommendations",
      "Membership Programs",
      "Social Media and Online Platforms",
      "Special Occasion Services"
  ]
  },
  {
    count: 1000,
    category: "Education",
    img: Schools,
    desc: "",
    subCat: [],
  },
  {
    count: 1000,
    category: "Rent & Hire",
    img: rentandhire,
    desc: "",
    subCat: [
      {
        name: "Vehicle Rentals",
        img: "Car rentals, bike rentals, van rentals, RV rentals, motorcycle rentals, etc."
      },
      {
        name: "Equipment Rentals",
        img: "Construction equipment rentals, tool rentals, machinery rentals, power equipment rentals, etc."
      },
      {
        name: "Event Rentals",
        img: "Party rentals, event furniture rentals, tent rentals, stage and lighting rentals, audio-visual equipment rentals, etc."
      },
      {
        name: "Costume Rentals",
        img: "Costume and attire rentals for parties, events, theater productions, cosplay, etc."
      },
      {
        name: "Furniture Rentals",
        img: "Home furniture rentals, office furniture rentals, event furniture rentals, etc."
      },
      {
        name: "Boat Rentals",
        img: "Boat rentals, kayak rentals, canoe rentals, yacht rentals, etc."
      },
      {
        name: "Storage Rentals",
        img: "Self-storage unit rentals, warehouse space rentals, vehicle storage rentals, etc."
      },
      {
        name: "Electronic Rentals",
        img: "Computer rentals, laptop rentals, tablet rentals, smartphone rentals, etc."
      },
      {
        name: "Sports Equipment Rentals",
        img: "Bicycle rentals, ski rentals, snowboard rentals, golf club rentals, etc."
      },
      {
        name: "Camera Rentals",
        img: "Camera rentals, DSLR rentals, video camera rentals, lens rentals, photography equipment rentals, etc."
      },
      {
        name: "Art Equipment Rentals",
        img: "Easel rentals, painting equipment rentals, sculpture tool rentals, etc."
      },
      {
        name: "Medical Equipment Rentals",
        img: "Medical device rentals, wheelchair rentals, hospital bed rentals, etc."
      },
      {
        name: "Party Supplies Rentals",
        img: "Party supplies rentals, bounce house rentals, inflatable rentals, etc."
      },
      {
        name: "Audio Equipment Rentals",
        img: "Speaker rentals, microphone rentals, amplifier rentals, DJ equipment rentals, etc."
      },
      {
        name: "Tools and DIY Equipment Rentals",
        img: "Hand tool rentals, power tool rentals, gardening tool rentals, etc."
      },
      {
        name: "Industrial Equipment Rentals",
        img: "Heavy machinery rentals, forklift rentals, crane rentals, etc."
      },
      {
        name: "Home Appliance Rentals",
        img: "Appliance rentals such as refrigerator rentals, washing machine rentals, etc."
      },
      {
        name: "Musical Instrument Rentals",
        img: "Musical instrument rentals, guitar rentals, piano rentals, drum rentals, etc."
      },
    ],
    service:[
      "Online Platforms",
      "In-Person Visits",
      "Phone and Email Communication",
      "Delivery and Pickup Services",
      "On-Site Setup and Installation",
      "Training and Instruction",
      "Customization and Personalization",
      "Flexible Rental Periods",
      "Online Payment and Billing",
      "24/7 Customer Support",
      "Insurance and Liability Coverage"
    ]
  },
  {
    count: 1000,
    category: "Medical",
    img: doc,
    desc: "",
    subCat: [
      {
        name: "Clinics",
        img: "primary_care_img_url",
      },
      {
        name: "Dentist",
        img: "dental_clinics_img_url",
      },
      {
        name: "Optometry Clinics",
        img: "optometry_clinics_img_url",
      },
      {
        name: "Hospitals",
        img: "hospitals_img_url",
      },
      {
        name: "Rehabilitation Centers",
        img: "rehabilitation_centers_img_url",
      },
      {
        name: "Mental Health Clinics",
        img: "mental_health_clinics_img_url",
      },
      {
        name: "Diagnostic Imaging Centers",
        img: "diagnostic_imaging_centers_img_url",
      },
      {
        name: "Pharmacies",
        img: "pharmacies_img_url",
      },
    ],
    service:[
      "In-Person Appointments",
      "Telemedicine Consultations",
      "Home Visits",
      "Ambulance Facilities",
      "Mobile Clinics",
      "Remote Monitoring",
      "Health Education Workshops",
      "Online Health Portals",
      "Health Screenings and Wellness Events",
      "Collaborative Care Teams",
      "After-Hours and Urgent Care Services",
      "Patient Advocacy and Support Services",
      "Specialized Treatment Centers",
      "Holistic and Integrative Medicine Services",
      "Medical Tourism Services"
    ]
  },
  {
    count: 1000,
    category: "Contractor",
    img: contractors,
    desc: "",
    subCat: [
      {
        name: "General Contracting",
        img: "Overseeing and managing construction projects from start to finish.",
      },
      {
        name: "Residential Construction",
        img: "Building new homes, townhouses, or residential developments.",
      },
      {
        name: "Commercial Construction",
        img: "Constructing commercial buildings, offices, retail spaces, etc.",
      },
      {
        name: "Industrial Construction",
        img: "Building industrial facilities, factories, manufacturing plants, etc.",
      },
      {
        name: "Civil Engineering and Infrastructure",
        img: "Providing civil engineering services for infrastructure projects.",
      },
      {
        name: "Electrical Contracting",
        img: "Installing and maintaining electrical systems and wiring.",
      },
      {
        name: "Plumbing Contracting",
        img: "Installing, repairing, and maintaining plumbing systems and fixtures.",
      },
      {
        name: "HVAC Contracting",
        img: "Designing, installing, and servicing HVAC systems.",
      },
      {
        name: "Roofing Contracting",
        img: "Installing, repairing, and maintaining roofs for buildings.",
      },
      {
        name: "Painting Contracting",
        img: "Providing interior and exterior painting services.",
      },
      {
        name: "Landscaping and Groundskeeping",
        img: "Designing, installing, and maintaining outdoor landscapes.",
      },
      {
        name: "Demolition Contracting",
        img: "Dismantling, deconstructing, and removing structures.",
      },
      {
        name: "Renovation and Remodeling",
        img: "Upgrading and remodeling existing properties.",
      },
      {
        name: "Maintenance and Repair Services",
        img: "Providing ongoing maintenance and repair services for properties.",
      }
    ],
    service:[
      "Initial Consultation",
      "Project Planning",
      "Proposal Submission",
      "Project Management",
      "Regular Communication",
      "On-Site Work",
      "Quality Assurance",
      "Change Management",
      "Documentation and Reporting",
      "Completion and Handover",
      "Post-Project Support"
    ]
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
      },
      {
        name : "Dogs",
        img:"",
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
    img: hostel,
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
    img: realestateagency,
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
  }
];

export default PopularCategoriesArray;
