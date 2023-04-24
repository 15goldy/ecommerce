import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold"> About-us</h1>
            <p className="lead mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae qui
              consequatur autem hic. Nobis perspiciatis sit est incidunt
              doloribus autem quis voluptatum blanditiis, inventore molestiae
              culpa deserunt! Velit, dicta officiis.
            </p>
						<p className="lead mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae qui
              consequatur autem hic. Nobis perspiciatis sit est incidunt
              doloribus autem quis voluptatum blanditiis, inventore molestiae
              culpa deserunt! Velit, dicta officiis.
            </p> 
						<Link className="btn btn-outline-primary px-3" to="/contact">Contact-us</Link>
          </div>
					<div className="col-md-6 d-flex justify-content-center">
						<img src="/assets/about.jpg" alt="" width="570px"/>
					</div>
        </div>
      </div>
    </div>
  );
};

export default About;