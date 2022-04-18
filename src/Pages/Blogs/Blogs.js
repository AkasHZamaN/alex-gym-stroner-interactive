import React from 'react';

const Blogs = () => {
    return (
        <>
            <section className='container my-5'>
                <h5 className='w-75 mx-auto'>Q.1: Difference between authorization and authentication.</h5>
                <p className='w-75 mx-auto '>Authorization means granting a user account configured on the computer system the right to make use of a resource (allocating the user privileges on the resource). Authentication protects the validity of the user account by testing that the person accessing that account is who s/he says s/he is.</p>


                <h5 className='w-75 mx-auto'>Q.2: Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p className='w-75 mx-auto'>I am using firebase for implement authentication. Such as, google sign in, github sign in, email and password and more. There are another option called <span className='text-warning'>JSON Web Token(JWT)</span> also use to implement authentication.</p>

                <h5 className='w-75 mx-auto'>Q.3: What other services does firebase provide other than authentication?</h5>
                <p className='w-75 mx-auto'>There are some other thing that firebase provides such as Realtime Database, Clode Messaging, Storage, Hosting, Remote config etc.</p>
            </section>
        </>
    );
};

export default Blogs;