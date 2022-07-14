import React from 'react'
import './Login.css'


function Login() {
  return (
    <div>
    <section class="Form my-4 mx-5">
          <div class="container">
              <div class="row">
                  <div class="col-lg-5">
                      <img src="./vngle_pic.png" class="img-fluid" alt="" />
                  </div>
                  <div class="col-lg-7 px-5 pt-5">
                      <h1 class="font-weight-bold py-3">Vngle</h1>
                      <h4>Sign into your account</h4>
                      <form>
                          <div class="form-row">
                              <div class="col-lg-7">
                                  <input type="email" placeholder="Email" class="form-control my-3 p-4" />
                              </div>
                          </div>

                          <div class="form-row">
                            <div class="col-lg-7">
                                <input type="password" placeholder="Password" class="form-control my-3 p-4" />
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="col-lg-7">
                                <button type="button" class="btn1 mt-3 mb-5">Login</button>
                            </div>
                          </div>
                          <a href="#">Forgot Password</a>
                          <p>Don't have an account? <a href="#">Register here</a></p>


                      </form>
                      
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Login