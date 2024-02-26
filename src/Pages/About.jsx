import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { getAuth, updateProfile, signOut } from 'firebase/auth'
import { storage } from '../firebase';
import ProfileLogo from "../assets/profile.svg"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const initialState = {
    name: "",
    email: ""

};


const About = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [Form, setForm] = useState(initialState)

    const { email, name } = Form;

    const handleChange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value });
    };

    const handleLogout = async () => {
        try {
            await signOut(auth).then(() => {
                navigate("/");
            }).catch((error) => {
                console.error("Logout Error: ", error);
            });
        } catch (error) { console.log(error) }

    }

    const handleAuth = async (e) => {
        e.preventDefault();

        try {
            // Ensure at least one field is provided
            if (!name && !email && !file) {
                toast("At least one field is required");
                return;
            }

            // Create an object to hold profile update data
            const profileData = {};

            // If name is provided, add it to profile data
            if (name) {
                profileData.displayName = name;
            }

            // If email is provided, add it to profile data
            if (email) {
                profileData.email = email;
            }

            // If file is provided, upload it to storage and add its URL to profile data
            if (file) {
                const storageRef = ref(storage, file.name);
                await uploadBytes(storageRef, file);
                const imageUrl = await getDownloadURL(storageRef);
                profileData.photoURL = imageUrl;
            }

            // Update user profile with the constructed profile data
            await updateProfile(auth.currentUser, profileData);
            navigate("/");

            // Display success message
            toast("Profile updated successfully");
        } catch (error) {
            console.error("Profile update error: ", error);
            toast("Failed to update profile");
        }
    }


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };


    return (
        <div>
            {<Nav />}
            <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 mt-16 sm:py-4 md:mx-auto">
                <form >
                    <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
                        <div className="shrink-0 mr-auto sm:py-3">
                            <p className="font-medium">Account Details</p>
                            <p className="text-sm text-gray-600">Edit your account details</p>
                        </div>
                        <Link to="/" className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Cancel</Link>
                        <button onClick={handleAuth} className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">Save</button>
                    </div>
                    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                        <p className="shrink-0 w-32 font-medium">Name</p>
                        <input placeholder={user.displayName} className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
                            value={name}
                            name="name"
                            onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                        <p className="shrink-0 w-32 font-medium">Email</p>
                        <input placeholder={user.email} className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                            value={email}
                            name="email"
                            onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-4 py-4  lg:flex-row">
                        <div className="shrink-0 w-32  sm:py-4">
                            <p className="mb-auto font-medium">Avatar</p>
                            <p className="text-sm text-gray-600">Change your avatar</p>
                        </div>
                        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
                            <img src={user.photoURL ? user.photoURL : ProfileLogo} referrerPolicy="no-referrer" className="h-16 w-16 rounded-full" />
                            <p className="text-sm text-gray-600">Drop your desired image file here to start the upload</p>
                            <input type="file" name="profilepic" className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                                onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="flex justify-end py-4 sm:hidden">
                        <Link to="/" className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Cancel</Link>
                        <button onClick={handleAuth} className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Save</button>
                    </div>
                    <div className='flex justify-center cursor-pointer my-5'>
                        <a className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white" onClick={handleLogout}>Logout {user.displayName}</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default About
