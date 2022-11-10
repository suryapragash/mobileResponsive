import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
function Bootstrap() {
  return (
    <>
      <div className="navbar bg-warning">
        <div>
          <ul className="nav mx-2 ps-5">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Privacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Legal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav  mx-5 pe-5">
            <li className="nav-item ">
              <a className="nav-link text-white" href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark" href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#">
                <FaLinkedin />
              </a>
            </li>
            <li className="nav-item   ">
              <a className="nav-link text-white" href="#">
                <FaGooglePlay />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar bg-white ms-4">
        <h2 className="text-black mx-5 fst-italic">
          Zupa<span className="text-warning">Builders</span>
        </h2>
        <ul className="nav mx-5 pe-5">
          <li className="nav-item">
            <a className="nav-link text-warning" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Experts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              PortFolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar bg-light  p-5 text-start">
        <h3 className="mx-4">Experts</h3>
        <ul className="nav  pe-5">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              /
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Experts
            </a>
          </li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ height: "300px" }}>
        <div className="container text-start mt-4 d-flex h-100 mb-5">
          <div className="col-6 h-100">
            <h3>Meet our experts</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores iste eaque iusto maxime atque deleniti. Harum porro
              rerum
              <hr
                className="w-25 text-warning "
                style={{ opacity: "100" }}
              ></hr>
              <br></br>
              praesentium non corporis totam maiores! Placeat, mollitia esse
              odio autem recusandae laborum corrupti quaerat minus dolorem earum
              fugit, molestias velit expedita maiores!praesentium non corporis
              totam maiores! Placeat, mollitia esse odio autem recusandae
            </p>
          </div>
          <div className="col-6 h-100  d-flex justify-content-end w-50 ">
            <img
              className=" h-75 w-100 mx-5"
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </div>
      <br></br>
      <div className="container-fluid bg-warning text-start d-flex p-5  mt-5 mb-5">
        <div className="col-3 text-white ms-5 ">
          <h3>3200+</h3>
          <hr className="w-25"></hr>
          <p>Completed Projects</p>
        </div>
        <div className="col-3 text-white">
          <h3>4900</h3>
          <hr className="w-25"></hr>
          <p>Built Houses</p>
        </div>
        <div className="col-3 text-white">
          <h3>6000</h3>
          <hr className="w-25"></hr>
          <p>Satisfied Customers</p>
        </div>
        <div className="col-3 text-white">
          <h3>1900</h3>
          <hr className="w-25"></hr>
          <p>Cups of Coffee</p>
        </div>
      </div>
      <div className="container text-center pt-5">
        <h3>The Team</h3>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iste eaque iusto maxime atque deleniti. Harum porro rerum<br></br>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iste eaque
        </p>
      </div>
      <div style={{ width: "400px" }}>
        <div className="container w-75 d-flex pt-4">
          <div className="col-3 w-100 text-center p-4">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <h4 className="mt-3">Robert Snowflake</h4>
            <p className="fst-italic text-muted ">main architect</p>
          </div>
          <div className="col-3 w-100 text-center p-4">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <h4 className="text-warning mt-3"> Sarah Smith</h4>
            <p className="fst-italic text-muted ">junior architect</p>
          </div>

          <div className="col-3 w-100 text-center p-4">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <h4 className="mt-3">Daniel </h4>
            <p className="fst-italic text-muted ">senior builder</p>
          </div>
          <div className="col-3 w-100 text-center p-4">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <h4 className="mt-3">Mike Richard</h4>
            <p className="fst-italic text-muted "> junior builder</p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div style={{ height: "400px" }}>
        <div className="container-fluid  text-start h-100 bg-dark d-flex pt-5 px-5">
          <div className="col-3 h-100 text-white py-3 ">
            <h4 className="pe-5 me-5">About Us</h4>
            <hr className="w-25 text-warning" style={{ opacity: "100" }}></hr>
            <p className="text-secondary">
              {" "}
              praesentium non corporis totam maiores! Placeat, mollitia esse
              odio autem recusandae laborum corrupti quaerat minus dolorem earum
              fugit, molestias velit expedita maiores!praesentium non corporis
            </p>
            <ul className="nav  ">
              <li className="nav-item ">
                <a className="nav-link text-warning p-2 " href="#">
                  <FaFacebook />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-muted p-2 " href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-muted p-2 " href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-muted p-2 " href="#">
                  <FaGooglePlay />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-muted p-2 " href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 h-100 text-white  py-3 ">
            <h4 className="me-5">Instagram Widget</h4>
            <hr className="w-25 text-warning " style={{ opacity: "100" }}></hr>
            <div className=" d-flex">
              <div className="p-1">
                <img
                  style={{ height: "75px", width: "75px" }}
                  src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className=" p-1">
                <img
                  style={{ height: "75px", width: "75px" }}
                  src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className="p-1">
                <img
                  style={{ height: "75px", width: "75px" }}
                  src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </div>
            <div className=" d-flex">
              <div className=" p-1">
                <img
                  style={{ height: "75px", width: "75px" }}
                  src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className=" p-1">
                <img
                  style={{ height: "75px", width: "75px" }}
                  src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className="p-1">
                <img
                  style={{ height: "75px", width: "75px" }}
                  src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </div>
          </div>
          <div className="col-3 text-white py-3 text-start ">
            <h4 className="pe-5 me-5">Twitter post</h4>
            <hr className="w-25 text-warning" style={{ opacity: "100" }}></hr>
            <div className="d-flex text-start">
              <div>
                <a className="nav-link text-muted p-0" href="#">
                  <FaTwitter />
                </a>
              </div>
              <div>
                <p className="text-secondary ">
                  {" "}
                  praesentium non corporis totam maiores! Placeat, mollitia
                  <span className="text-warning"> https://www.google.com/</span>
                </p>
                <hr className="text-black"></hr>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <a className="nav-link text-muted p-0" href="#">
                  <FaTwitter />
                </a>
              </div>
              <div>
                <p className="text-secondary">
                  maiores!praesentium non corporis totam maiores! Placeat,
                  mollitia
                  <span className="text-warning">https://www.youtube.com/</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 text-white py-3  ">
            <h4>Short Navigation</h4>
            <hr className="w-25 text-warning" style={{ opacity: "100" }}></hr>
            <div className="FaGreaterThan">
              <li className="nav-item list-group">
                <a className="nav-link text-secondary p-1 " href="#">
                  <FaGreaterThan />
                  <span className="mx-3"> Home</span>
                </a>
              </li>
              <li className="nav-item list-group">
                <a className="nav-link text-secondary p-1" href="#">
                  <FaGreaterThan />
                  <span className="mx-3"> Experts</span>
                </a>
              </li>
              <li className="nav-item list-group">
                <a className="nav-link text-warning p-1 " href="#">
                  <FaGreaterThan />
                  <span className="mx-3">Portfolio</span>
                </a>
              </li>
              <li className="nav-item list-group">
                <a className="nav-link text-secondary p-1" href="#">
                  <FaGreaterThan />
                  <span className="mx-3 "> Blog</span>
                </a>
              </li>
              <li className="nav-item list-group">
                <a className="nav-link text-secondary p-1" href="#">
                  <FaGreaterThan />
                  <span className="mx-3"> Services</span>
                </a>
              </li>
              <li className="nav-item list-group">
                <a className="nav-link text-secondary p-1" href="#">
                  <FaGreaterThan />
                  <span className="mx-3"> Contact</span>
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="bg-light text-secondary py-2">
          <p>ZupaBuilder / Allrightreserved2015</p>
        </div>
      </div>
    </>
  );
}
export default Bootstrap;


