import banquet from "../../assets/banquet.jpg"
import acRepair from "../../assets/acRepair.jpg"
import bikeService from "../../assets/bikeService.jpg"
import carService from "../../assets/carService.jpg"
import bridalRequisite from "../../assets/bridalRequisite.jpg"
import caterers from "../../assets/caterers.jpg"
import electrician from "../../assets/electrician.jpg"
import grocery from "../../assets/grocery.jpg"
import movies from "../../assets/movies.jpg"
import parlour from "../../assets/parlour.jpg"
import salons from "../../assets/salons.jpg"
import spaMassage from '../../assets/spaMassage.jpg'


const MainCategoriesArray = [
  {
    name: "Wedding Requisites",
    SubCateggories: [
      { name: "Banquet Hall", img: banquet },
      { name: "Bridal Requisite", img: bridalRequisite },
      { name: "Caterers", img: caterers },
    ],
  },
  {
    name: "Beauty and Spa",
    SubCateggories: [
      { name: "Beauty Parlours", img: parlour },
      { name: "Salons", img: salons },
      { name: "Spa and Massages", img: spaMassage },
    ],
  },
  {
    name: "Daily Needs",
    SubCateggories: [
      { name: "Grocery", img: grocery },
      { name: "Electrician", img: electrician },
      { name: "Movies", img: movies },
    ],
  },
  {
    name: "Repairs and Services",
    SubCateggories: [
      { name: "Bike Services", img: bikeService },
      { name: "Car Services", img: carService },
      { name: "AC Repairs", img: acRepair },
    ],
  },
];

export default MainCategoriesArray