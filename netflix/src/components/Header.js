import axios from 'axios';
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import {useDispatch, useSelector} from "react-redux"
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/MovieSlice';

export default function Header() {

const user=useSelector((store)=>store.app.user);
const toggle=useSelector((store)=>store.movie.toggle);
const dispatch=useDispatch();
const navigate=useNavigate();

const handleLogout=async()=>{
  try {
    const res = await axios.get(`${API_END_POINT}/logout`);
    if(res.data.success){
      toast.success(res.data.message);
    }
    console.log(res);
    dispatch(setUser(null));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
  
}
const toggleHandler = ()=>{
  dispatch(setToggle());
}
  return (
    <div className=' absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt='netflixlogo' className='w-56'></img>

      {
        user && (
          <div className='flex items-center'>
        <IoIosArrowDropdown size="24px" color='white'/>
      <h1 className='text-lg font-medium text-white' >{user.name}</h1>
      <div className='ml-4'>
      <button className='bg-red-800 text-white px-4 py-2' onClick={handleLogout}>Logout</button>
      <button className='bg-red-800 text-white px-4 py-2 ml-2' onClick={toggleHandler}>{toggle ? "Home" : "Search movie"}</button>
      </div>
    </div>
        )
}
   
    </div>
   
  )
}
