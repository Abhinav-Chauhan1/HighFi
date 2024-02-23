import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { auth, providerGoogle } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const initialState = {
  email: "",
  password: "",
};

const Auth = (setUser) => {
  const [state, setState] = useState(initialState);

  const { email, password } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };




  const handleAuth = async (e) => {
    e.preventDefault();
    if (email && password) {
      const { user } = await signInWithEmailAndPassword(auth, email, password).then((result) => {
        toast("Success");
        navigate("/");
        setUser(user);
      }).catch((error) => {
        return toast.error(error)
      })
    } else {
      return toast.error("All fields are mandatory to fill");
    }
  }

  const handleAuthglg = async () => {
    const { user } = await signInWithPopup(auth, providerGoogle).then((result) => {
      toast("Success");
      navigate("/");
        setUser(user);
    }).catch((error) => {
      return toast.error(error)
    })

  }

  return (
    <div>
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p className="text-left text-3xl font-bold">Welcome,</p>
            <p className="mt-2 text-left text-gray-500">Please enter your details to Login.</p>
            <button onClick={handleAuthglg} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" /> Log in with Google</button>
            <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" /> Log in with Facebook</button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
            </div>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleAuth}>
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input type="email" name="email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email"
                    value={email}
                    onChange={handleChange} />
                </div>
              </div>
              <div className="mb-12 flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input type="password" name="password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password"
                    value={password}
                    onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
            </form>
            <div className="py-12 text-center">
              <p className="whitespace-nowrap text-gray-600">
                Don't have an account?
                <Link to="/signup" className="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</Link>
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

export default Auth
