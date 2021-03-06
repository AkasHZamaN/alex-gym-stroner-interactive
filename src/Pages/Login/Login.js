import React, { useRef, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";


const Login = () => {
    const [error, setError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading        
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      const loginForm = (event) => {
          event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
        .catch(
          setError('Please check your Email & Password!!')
        )
      }
      
      if(loading){
        return <Loading></Loading>
      }

      if(user){
          navigate(from, {replace: true });
      }

      const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        if(email){
          toast('Please Check Your Email');
        }
        else{
          toast('Please Enter Your Email');
        }
        
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
             {/* error messages */}
            <p className="text-danger fw-bolder">{error}</p>

            <input className="w-50 bg-success opacity-75 text-white rounded-3  py-1 mt-3 border-0 fw-bold" type="submit" value="Login" />
          </form>
          <p className="text-start pt-3">
            Are your new user?{" "}
            <Link
              to={"/register"}
              className="text-danger text-decoration-none pe-auto"
            >
              Please create an account
            </Link>
          </p>
          <p className="text-start">
            Forget Password?{" "}
            <button
              className="text-danger text-decoration-none border-0 bg-white pe-auto"
              onClick={resetPassword}
            >
             reset your password
            </button>
          </p>
          <ToastContainer />
          <SocialLogin></SocialLogin>
        </article>
      </article>
    </section>
  );
};

export default Login;
