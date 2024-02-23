import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword , updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './Signup.css'


const Signup = () => {
  const { register, handleSubmit } = useForm()

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")



  const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
  });
  await updateProfile(auth.currentUser, { displayName: name }).catch(
    (err) => console.log(err)
  );
    console.log(e)
  }

 
  return (
    <div>
      <div className="cont">
        <div className="signup">
          <form action='' >
            <h1>SignUp</h1>
            <input type="text" 
            value={name}
            placeholder='Name'
            onChange={(e) => setname(e.target.value)}
            name="name" id="" />
            <input type="email" 
            {...register("email", { required: true })}
            value={email} 
            placeholder='Email'
            onChange={(e) => setemail(e.target.value)} />
            <input type="password" 
            {...register("password", { required: true , minLength:6 , maxLength:15})}
            value={password} 
            placeholder='Password'
            onChange={(e) => setpassword(e.target.value)}
             />
            {/* {errors.password && <div className='message'> {errors.password.message}</div>} */}
            <input onClick={onSubmit} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
