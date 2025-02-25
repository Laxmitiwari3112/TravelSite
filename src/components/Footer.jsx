import React from "react";
import {
  FaFacebookMessenger,
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white p-12">

      {/* --------AboutUs-------- */}
      
      <div className="container border text-white p-8 grid grid-cols-2 md:grid-cols-3 ">
        <div className="p-2 m-2">
          <h5 className="py-3 font-semibold">Legal Policy</h5>
          <div className="grid grid-1">
            <Link to="/">Terms & Condition</Link>
            <Link to="/privacy_policy">Privacy Policy</Link>
            <Link to="/hiring">We Are Hiring</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
        <div className="p-2 m-2">
          <h5 className="py-3 font-semibold">Other Services</h5>
          <div className="grid grid-1">
            <Link to="/">Terms & Condition</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          ,mnb
        </div>
        <div className="p-2 m-2">
          {/* <h2 className='py-3 font-medium  text-2xl'>Login</h2>
            <div>
                <Link to="/login" className='border px-2 rounded-2xl hover:bg-blue-500'>Login</Link>
            </div> */}
          <form action="">
            <input
              type="email"
              placeholder="Enter your email..."
              required
              className="border mr-2 p-1 rounded-xl"
            />
            <button className=" p-1 px-2 my-4 rounded-xl bg-blue-800 hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* -----Scial_Media------ */}

      <div className="px-25">
        <h3 className="py-4 text-center text-4xl font-semibold">Follow Us</h3>
        <div className="flex justify-center gap-3">
          <FaInstagram />
          <FaFacebookMessenger />
          <FaSquareXTwitter />
        </div>
      </div>

      {/* ---------CopyRight-------- */}

      <div className="mt-6 text-white flex justify-center">
        <div className="flex justify-center items-center">
          <FaCopyright />
        </div>
        <p className="p-2">@TravelBucket...CopyRight Claim</p>
      </div>
    </div>
  );
};

export default Footer;
