import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from "react-toastify";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};


const Signup = () => {
    const [state, setState] = useState(initialState);

    const { email, password, name, confirmPassword } = state;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleAuth = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            return toast.error("Passwords Does Not Match");
        }
        else {
            if (name && email && password) {
                await createUserWithEmailAndPassword(auth, email, password).then((result) => {
                    toast.error("Success")
                    navigate("/login");
                }).catch((error) => {
                    const errorMessage = error.message;
                    return toast.error(errorMessage);
                })
                await updateProfile(auth.currentUser, { displayName: name }).catch(
                    (err) => console.log(err)
                  );
            }
            else {
                return toast.error("All fields are mandatory to fill");
            }

        }


    }


    return (
        <div>
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                        <p className="text-left text-3xl font-bold">Welcome,</p>
                        <p className="mt-2 text-left text-gray-500">Please enter your details.</p>
                        <form className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="text" name="name" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name"
                                        value={name}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="email" name="email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email"
                                        value={email}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className=" flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" name="password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password"
                                        value={password}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-12 flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" name="confirmPassword" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <button type="submit" onClick={handleAuth} className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Sign up</button>
                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600">
                                Already have an account?
                                <Link to="/" className="underline-offset-4 font-semibold text-gray-900 underline">  Sign in.</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                    <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </div>
            </div>
        </div>
    )
}

export default Signup
