import React from "react";
import logo from "../../assets/logo.svg";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark pt-5">
      <div className="row ">
        <div className="text-center col-md-4">
          <p className="text-white fw-bold">Our Address</p>
          <p className="text-white-50">
            22 Alnahas Building, 2 AlBahr St, Tanta
          </p>
          <p className="text-white-50">Al-Gharbia Governorate, Egypt</p>
        </div>
        <div className="text-center col-md-4">
          <p className="text-white fw-bold">Opening Hours</p>
          <p className="text-white-50">Mon – Fri: 10 AM – 11 PM</p>
          <p className="text-white-50">Sat – Sun: 9 AM – 1 PM</p>
        </div>
        <div className="text-center col-md-4">
          <p className="text-white fw-bold">Private Dinning</p>
          <p className="text-white-50">Main Email: Babette@7oroof.com</p>
          <p className="text-white-50">Phone: 02 0106670721</p>
        </div>
      </div>
      <div className="text-center">
        <img className="pt-3" src={logo} alt="" />
        <p className="text-white-50 py-3">
          Babette was designed with the history in mind we have created a soft <br></br>industrial dining room, combined with an open kitchen, coffee take out<br></br> bar and alovely awesome on site coffee roastery.
        </p>
        <div className="pt-1 pb-5">
        <Button className="fw-bold py-3 px-3" variant="outline-warning">Book Your Chef Now!</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
