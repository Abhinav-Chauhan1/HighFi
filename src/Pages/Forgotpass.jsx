import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Forgotpass = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleReset = async (e) => {
        e.preventDefault();
        if(email){
            try {
                await sendPasswordResetEmail(auth, email);
                setResetSuccess(true);
                setTimeout(() => {
                    Navigate("/")
                }, 2000);
                setError('');
            } catch (error) {
                setError(error.message);
            }
        }
        else
        {
            toast("Enter Email")
        }
    };

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="lg:w-[28rem] mx-auto lg:my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 mt-10 md:pt-0">
                        <p className="text-left text-3xl font-bold">Forgot Password</p>
                        {resetSuccess ? (
                            <p className="text-green-500">Password reset email sent! Check your inbox.</p>
                        ) : (
                            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleReset}>
                                <div className="flex flex-col mb-4 pt-4">
                                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                                >
                                    Reset Password
                                </button>
                            </form>
                        )}
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600">
                                Already have an account?{' '}
                                <Link to="/" className="underline-offset-4 font-semibold text-gray-900 underline">
                                    Sign in.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                    <img
                        className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
                        src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Forgotpass;
