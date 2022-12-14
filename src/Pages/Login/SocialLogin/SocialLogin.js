import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>;
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-around'>
                <div style={{ height: "1px", width: "35%" }} className=' bg-dark'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: "1px", width: "35%" }} className=' bg-dark'></div>
            </div>
            {errorElement}
            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='text-white bg-primary my-3 w-25 d-block mx-auto py-2 rounded-xl border-0 px-8'
                >
                    <i className="fa-brands fa-google"></i>
                    <span className='px-3'>Google Sign In</span>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;