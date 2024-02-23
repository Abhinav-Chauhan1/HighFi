import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Signup from './Pages/signup'
import { ToastContainer } from 'react-toastify'
import Create from './Pages/Create';
import Show from './Pages/Show';

function App() {


  return (
    <>
     <ToastContainer position="top-center" />
      <Routes>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/"} element={<Auth />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route path={"/create"} element={<Create />}></Route>
        <Route path={"/show/:id"} element={<Show />}></Route>
      </Routes>

    </>
  )
}


export default App
