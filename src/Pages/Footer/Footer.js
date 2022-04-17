import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <article className='w-100 bg-success bg-opacity-75 mx-auto d-flex justify-content-between align-items-center row row-cols-1 row-cols-lg-3 g-4 p-3 mt-5'>
                
                <article className='d-flex justify-content-center  align-items-center'>
                    <img className='w-25 h-50' src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" alt="" />
                    <article>
                    <h1 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bolder', fontSize:'30px', color:'white'}}>Alex GYM <span className='text-warning'>Stone</span></h1>
                    <small style={{fontSize:'12px', fontWeight:'bold', fontStyle:'italic', color:'white'}}>EST: 2018</small>
                    </article>
                </article>
                
                <article className='d-flex justify-content-between align-items-center'>
                    <article>
                    <h2 style={{fontFamily:'cursive', paddingBottom:'20px'}}className='text-warning'>Quick Link</h2>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/'}>Home</Link>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/about'}>About Me</Link>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/services'}>Services</Link>
                        <Link className='d-block text-decoration-none text-white py-1 fw-bold' to={'/about'}>Ask Me</Link>
                    </article>
                    <article className='text-white'>
                        <h2 style={{fontFamily:'cursive', paddingBottom:'5px'}}className='text-warning'>My Contacts</h2>
                        <p>Phone: +880172585XXXX</p>
                        <p>E-Mail: info@example.com</p>
                        <p>Address: <span style={{fontFamily:'cursive'}}>350 Avenue, Sylhet,<br />3100-SYLHET</span></p>
                    </article>
                </article>
            </article>
        </section>
    );
};

export default Footer;