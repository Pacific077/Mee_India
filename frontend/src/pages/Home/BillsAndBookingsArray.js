import hotel from '../../assets/hotel.jpg'
import phone from '../../assets/phone.jpg'
import water from '../../assets/water.jpg'
import electricity from '../../assets/electricity.jpg'
import insurance from '../../assets/insurance.jpg'
import bus from '../../assets/bus.jpg'
import carRental from '../../assets/carRental.jpg'
import flight from '../../assets/flight.jpg'
import gas from '../../assets/gas.jpg'
import train from '../../assets/train.jpg'

const BillsAndBookingArray = [
  {
    name: "Bills and Recharge",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eos",
    SubCat: [
      {
        name: "Mobile",
        incon: phone,
      },
      {
        name: "Electricity",
        incon: electricity,
      },
      {
        name: "DTH",
        incon: "Icon Link here",
      },
      {
        name: "Water",
        incon: water,
      },
      {
        name: "Gas",
        incon: gas,
      },
      {
        name: "Insurance",
        incon: insurance,
      },
    ],
  },
  {
    name: "Travel Booking",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eos",
    SubCat: [
      {
        name: "Flight",
        incon: flight,
      },
      {
        name: "Train",
        incon: train,
      },
      {
        name: "Bus",
        incon: bus,
      },
      {
        name: "Car Rental",
        incon: carRental,
      },
      {
        name: "Hotel",
        incon: hotel,
      },
      // {
      //   name: "Insurance",
      //   incon: "Icon Link here",
      // },
    ],
  },
];

export default BillsAndBookingArray;
