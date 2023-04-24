import React from "react";
const Login = () => {
  return (
    <div>
     
      <button
        type="button"
        className="btn btn-outline-dark ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal">
			<span class="fa fa-sign-in"></span>
        Log In
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">
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

			<button className="btn btn-danger w-100 mb-2"> <span className="fa fa-google me-2"> </span> Sign in with Google </button>
			<button className="btn btn-primary w-100 mb-2"> <span className="fa fa-facebook"> </span> Sign in with Facebook </button>
						
				
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp "
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
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
                <button type="submit" className="btn btn-outline-primary w-100">
                  Submit
                </button>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;