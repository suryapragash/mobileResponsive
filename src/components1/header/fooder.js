import React from "react";
import img from "./Screenshot (4).png";
// import { facirclechevronup } from "react-icons/fa";
//import { FaGooglePlay } from "react-icons/fa";

function Fooder() {
  return (
    <section className="background">
      <div className="container ">
        <div className="row d-flex pt-5 mb-0">
          <div className="p-3 col-sm-6 ">
            <ul>
              <a href="#" id="logo">
                <img src={img} alt="logo" height="130px" width="140px"></img>
              </a>
            </ul>
          </div>

          <div className="px-5 text-white d-flex col-sm-3">
            <div className="text-end">
              <p>Mission</p>
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Licenses & Registrations</p>
            </div>
            <div className="vl"></div>
          </div>

          <div className="col-sm-3 ">
            <a className="text-white dec">Get in touch with us at </a>
            <a className="text-warning pe-5">support@thecheflane.com</a>

            <button type="button" class="btn bg-white me-2  mt-4">
              contact us
            </button>
          </div>
          {/* <a className=" d-flex ">
            <FaGooglePlay className="bg-warning ms-auto" />
          </a> */}
          <hr className="text-white container mx-5"></hr>
          <div className=" container mx-4">
            <p className="text-muted p-2">
              Copyright © 2021 Specialist Foods. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Fooder;
