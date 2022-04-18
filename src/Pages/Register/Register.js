import React from 'react';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile] = useUpdateProfile(auth);

    const registrationForm = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
          // console.log('Updated profile');
          navigate('/');
    }
    
    if(error){
      // return <ErrorMessage></ErrorMessage>
      return <div><p>Error: {error?.message}</p></div>
    }
    if(loading){
      return <Loading></Loading>
    }
    if(user){
        console.log('user', user);
    }

    return (
        <section>
      <article className="w-50 mx-auto my-3 text-center">
      <img style={{height:'90px'}} src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" alt="" />
      <h2 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bold',color:'#E07C24'}}>Alex GYM <span className="text-success">Stone</span></h2>
        <article className="">
          <form onSubmit={registrationForm}>
            <input
                className="form-control my-3"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
            <input
                className="form-control my-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
             required
            />
            <div><p>{error?.message}</p></div>
            <input
            className="form-control my-3"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
            />
            <div><p>{error?.message}</p></div>

            <input className="w-50 bg-success opacity-75 text-white rounded-3 border-none py-1 mt-3 fw-bold" type="submit" value="Register" />
          </form>
          <p className="text-start py-3">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-danger text-decoration-none pe-auto"
            >
              Please Login
            </Link>
          </p>
        </article>
      </article>
    </section>
    );
};

export default Register;