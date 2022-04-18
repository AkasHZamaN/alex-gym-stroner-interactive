import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

        let errorText;
    if(error){
        errorText = <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>  
    }
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate('/');
    }

    return (
        <div>
            
            <article className="d-flex justify-content-center align-items-center">
              <article style={{height:'2px', width:'250px', backgroundColor:'lightgray'}}></article>
              <p className="mx-2">or</p>
              <article style={{height:'1px', width:'250px', backgroundColor:'lightgray'}}></article>
            </article>

            {errorText}
            <article className="w-100 mx-auto">
              <button 
              onClick={()=> signInWithGoogle()}
               className="bg-success opacity-75 border-0 text-white py-1 fw-bold rounded-3 w-100 mx-auto my-3 d-flex justify-content-center align-items-center">
                <img style={{height:'25px',marginRight:'5px'}} src="https://i.postimg.cc/RhBmjrmg/google.png" alt="" />
                Google Sign In
                </button>
          </article>
        </div>
    );
};

export default SocialLogin;