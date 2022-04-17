import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    
  return (
    <section>
      <article className="w-50 mx-auto text-center">
      <img style={{height:'90px'}} src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" alt="" />
      <h2 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bold'}}>Alex GYM <span className="text-success">Stone</span></h2>
        <article className="">
          <form>
            <input
                className="form-control my-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <input
            className="form-control my-3"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
            <input className="w-50 bg-success opacity-75 text-white rounded-3 border-none py-1 mt-3 fw-bold" type="submit" value="Login" />
          </form>
          <p className="text-start py-3">
            Are your new user?{" "}
            <Link
              to={"/register"}
              className="text-danger text-decoration-none pe-auto"
            >
              Please create an account
            </Link>
          </p>
        </article>
      </article>
    </section>
  );
};

export default Login;
