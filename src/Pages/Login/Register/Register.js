import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>;
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='w-96 mx-auto form border p-10 rounded'>
            <h2 className='text-center text-3xl text-primary font-bold italic my-10 '>Please Register</h2>
            <form onSubmit={handleRegister} className='w-50 mx-auto'>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onChange={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ml-3 ${agree ? 'text-success' : 'text-danger'} text-sm`} htmlFor="terms">Accept ED-Tech Terms and Condition</label>
                <input disabled={!agree} className='font-semibold d-block mx-auto text-primary mt-3' type="submit" value="Register" />
            </form>
            <div className='text-center'>
                <p>Already have an account ? <span ><Link to="/login" className='text-decoration-none pe-auto text-primary'>Please Login</Link></span></p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;