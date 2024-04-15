import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
    <section className="login-wrapper p-5">
    <div className="container-xxl">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="text-center price fs-4">Forgot password</h2>
                <p className="text-center mb-4 price fs-8" >
                  Enter your email address to receive a reset confirmation
                </p>
                <form >
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-3"
                    >
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="enter email here ..."
                    //   value={email}
                    //   onChange={(event) => setEmail(event.target.value)}
                    //   required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Submit</button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default ForgotPassword
