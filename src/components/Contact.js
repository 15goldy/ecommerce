import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-45">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h2>Have some questions ?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="assets/contact.jpg" alt="" width="400px" height="400px" />
          </div>
          <div className="col-md-6 ">
            <form action="">
              <div className="mb-3">
                <label for="exampleForm" className="form-label">
                  Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControl"
                  placeholder="goldy"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-outline-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
