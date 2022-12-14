import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    };

    if (loading) {
        return <Loading></Loading>
    };

    if (error) {
        errorElement = <p className='text-danger text-center mt-3'>Error: {error?.message} </p>;
    };

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        toast("Log in user")
    };

    return (
        <div className='w-96 mx-auto form border p-10 rounded'>
            <h2 className='text-center text-3xl text-primary font-bold italic my-10 '>Please login</h2>
            <form onSubmit={handleSubmit} className='w-100'>
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='font-semibold d-block mx-auto text-primary' type="submit" value="Login" />
            </form>
            {errorElement}
            <div className='text-center'>
                <p>Don't have an account ? <span><Link to="/register" className='text-decoration-none pe-auto text-primary'>Please Register</Link></span></p>
                <SocialLogin />
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;