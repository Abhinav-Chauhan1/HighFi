import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import Signup from './Pages/signup';
import { ToastContainer } from 'react-toastify';
import Create from './Pages/Create';
import Show from './Pages/Show';
import { BallTriangle } from 'react-loader-spinner';
import About from './Pages/About';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      {loading ? (
        // Render loader while user details are loading
        <div className='grid h-screen place-items-center'><BallTriangle
          height={100}
          width={100}
          radius={5}
          color="rgb(37 99 235)"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></div>
      ) : (
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Auth setUser={setUser} />} />
          <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup setUser={setUser}/>} />
          {user && (
            <>
              <Route exact path="/home" element={<Home setUser={setUser}/>} />
              <Route path="/create" element={<Create user={user}/>} />
              <Route path="/show/:id" element={<Show />} />
              <Route path="/about" element={<About />} />
            </>
          )}
        </Routes>
      )}
    </>
  );
}

export default App;
