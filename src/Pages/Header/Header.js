import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <section>
      <article className="bg-success bg-opacity-75 p-2">
        <h2 className="text-center text-white">
          Alex Gym <span className="text-warning fs-1 fw-bold">Stone</span>
        </h2>
      </article>
      
      <nav className="d-flex justify-content-center align-items-center bg-success bg-opacity-50">
          <CustomLink className="me-5" to={'/'}>Home</CustomLink>
          <CustomLink className="me-5" to={'/blogs'}>Blogs</CustomLink>
          <CustomLink className="me-5" to={'/about'}>About</CustomLink>
          <CustomLink className="me-5" to={'/register'}>Register</CustomLink>
          <CustomLink className="me-5" to={'/login'}>Login</CustomLink>
      </nav>

    </section>
  );
};

export default Header;
