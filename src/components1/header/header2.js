import React from "react";
import imgg from "./image 4.png";
import imggg from "./image 5.png";
import imgggg from "./image 6.png";
import { FaFacebook } from "react-icons/fa";
function Tail() {
  return (
    <section>
      <div className="container">
        <h3 className="text-center get">Let's gets started</h3>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card border-0 trans">
              <img
                src={imgg}
                alt="foodies"
                className="photo justify-content-center mx-auto"
              ></img>
              <div className="card-body text-center">
                <h5 className="tryy">Find chefs across locations</h5>
                <p className="try">
                  We have home chefs with professional training and passionate
                  home chefs with years of experience filling happy bellies
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0 trans">
              <img
                src={imggg}
                alt="fodies"
                className="photo justify-content-center py-3 mx-auto"
              ></img>
              <div className="card-body text-center">
                <h5 className="tryy">Find Your Food</h5>
                <p className="try">
                  What are you in the mood for today? North-Indian or
                  South-Indian, Chinese or Continental, Mexican or Tibetan
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0 trans">
              <img
                src={imgggg}
                alt="foodie"
                className="photo justify-content-center mx-auto"
              ></img>
              <div className="card-body text-center">
                <h5 className="tryy">Place Your Order </h5>
                <p className="try">
                  Contact your chosen chef directly or order ontheir webpage and
                  have homemade delicacies delivered in a jiffy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div>
          <h1 className="text-center get">Why try The Chef Lane?</h1>
        </div>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
          <div className="ms-4 text-start ">
            <a className="nav-link text-dark" href="#">
              <FaFacebook className="tex" />
              <span className="mx-3 con"> Because home food is soul food!</span>
            </a>
            <a className="nav-link text-dark " href="#">
              <FaFacebook className="tex" />
              <span className="mx-3 con">
                {" "}
                All our home chefs are regestered with the FSSA(Food saftey and
                standards Authority of india)
              </span>
            </a>
            <a className="nav-link text-dark" href="#">
              <FaFacebook className="tex" />
              <span className="mx-3 con"> # vocalforical </span>
            </a>
            <a className="nav-link text-dark" href="#">
              <FaFacebook className="tex" />
              <span className="mx-3 con">
                {" "}
                Home Chefs brings a tried and tested repertoire of home-cooked
                delicate from their homes to yours
              </span>
            </a>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <h1 className="text-center get">Testimonials</h1>
        </div>
        <br></br>
        <br></br>
      </div>
    </section>
  );
}
export default Tail;
