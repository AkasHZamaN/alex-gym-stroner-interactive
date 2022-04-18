import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <section>
      <article className="bg-success bg-opacity-75 p-2">
      <article className='d-flex justify-content-start  align-items-center px-5'>
                    <img style={{wide:'100px', height:'80px'}} src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" alt="" />
                    <article>
                    <h1 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bolder', fontSize:'30px', color:'white'}}>Alex GYM <span className='text-warning'>Stone</span></h1>
                    <small style={{fontSize:'12px', fontWeight:'bold', fontStyle:'italic', color:'white'}}>EST: 2018</small>
                    </article>
                </article>
      </article>
      
      <nav className="d-flex justify-content-end align-items-center bg-success bg-opacity-50 p-2 mx-auto">
          <CustomLink className="me-3" to={'/'}>Home</CustomLink>
          <CustomLink className="me-3" to={'/services'}>Services</CustomLink>
          <CustomLink className="me-3" to={'/blogs'}>Blogs</CustomLink>
          <CustomLink className="me-3" to={'/about'}>About</CustomLink>
          <CustomLink className="me-3" to={'/register'}>Register</CustomLink>
          {
            user ?
            <button style={{fontFamily:'cursive'}} onClick={handleSignOut} className="border-0 bg-warning rounded-3 text-white fw-bold p-1">Sgin Out</button>
            :
            <CustomLink className="me-3" to={'/login'}>Login</CustomLink>}
      </nav>

    </section>
  );
};

export default Header;
