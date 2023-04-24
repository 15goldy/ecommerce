import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-dark ms-2 "
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
        >
          <span className="fa fa-user-plus me-2"></span>
          Sign up
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="signupModal"
          tabindex="-1"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="signupModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-danger w-100 mb-2">
                  {" "}
                  <span className="fa fa-google me-2"> </span> Sign up with
                  Google{" "}
                </button>
                <button className="btn btn-primary w-100 mb-2">
                  {" "}
                  <span className="fa fa-facebook"> </span> Sign up with
                  Facebook{" "}
                </button>

                <form>
                  <div className="mb-3">
                    <label for="exampleInput" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
