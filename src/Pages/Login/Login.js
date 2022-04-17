import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const loginForm = (event) => {
          event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
      }
    
      if(user){
          navigate('/');
      }

  return (
    <section>
      <article className="w-50 mx-auto my-3 text-center">
      <img style={{height:'90px'}} src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" alt="" />
      <h2 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bold', color:'#E07C24'}}>Alex GYM <span className="text-success">Stone</span></h2>
        <article className="">
          <form onSubmit={loginForm}>
            <input ref={emailRef}
                className="form-control my-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <input ref={passwordRef}
            className="form-control my-3"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
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
