import React from "react";
import img from "./Screenshot (4).png";

function Head() {
  return (
    <section className="background">
      <div className="container ms-auto d-flex p-2 ">
        <div className="navigation-bar">
          <ul>
            <a href="#" id="logo">
              <img src={img} alt="" height="60px" width="100px"></img>
            </a>
          </ul>
        </div>
        <div className="nav-bar ms-auto py-3 ">
          <button type="button" class="btn bg-white me-2 p-2 gett">
            I am a chef
          </button>
          <button type="button" class="btn bg-white p-2 gett">
            I am a custumer
          </button>
        </div>
      </div>
    </section>
  );
}
export default Head;
