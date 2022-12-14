import React from "react";
import { FaSistrix } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
function Content() {
  return (
    <section>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner heig">
          <div class="carousel-item active h-100">
            <img
              src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100"
              alt="images"
            />
            <div class=" carousel-caption py-5 pt-5 h-100">
              <h1 class="d-flex sty">Home-cooked for</h1>
              <h1 className="d-flex le"> every mood</h1>
              <p class="lead mb-4 d-flex le">Explore Homemade delicacies</p>

              <div class="input-group mb-3 my-5 w-50">
                <input
                  type="text"
                  class="form-control position-relative"
                  placeholder="  Find your chef by location"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                ></input>
                <div className="position-absolute text-dark too">
                  <FaSistrix className="fa-2x" />
                </div>
                <div className="position-absolute text-dark mx-auto to">
                  <FaMapMarkerAlt className="fa-2x " />
                </div>
                <div class="input-group-append">
                  <button
                    class="btn btn-outline text-white background "
                    type="button"
                  >
                    Find chef
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100"
              alt="images"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100"
              alt="images"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <br></br>
    </section>
  );
}
export default Content;
