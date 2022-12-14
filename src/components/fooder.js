import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlay,
} from "react-icons/fa";

function Fooder() {
  return (
    <section className=" bg-secondary ">
      <div className="container text-center justify-content-center bg-secondary p-5">
        <div className="d-flex justify-content-center">
          <a className=" text-dark px-2" href="#">
            <FaFacebook />
          </a>

          <a className="text-dark px-2" href="#">
            <FaTwitter />
          </a>

          <a className="text-dark px-2" href="#">
            <FaLinkedin />
          </a>

          <a className="text-dark px-2" href="#">
            <FaGooglePlay />
          </a>

          <a className=" text-dark px-2" href="#">
            <FaFacebook />
          </a>

          <a className=" text-dark px-2" href="#">
            <FaTwitter />
          </a>

          <a className="text-dark px-2" href="#">
            <FaLinkedin />
          </a>

          <a className=" text-dark px-2" href="#">
            <FaGooglePlay />
          </a>
        </div>

        <div>
          <h3>MINPO</h3>
          <p>copyrights @ 2016 Allrightreserved</p>
        </div>
      </div>
    </section>
  );
}
export default Fooder;
