import axios from 'axios';
import React from 'react'
import { Options, Popular_Movie, Top_Rated_Movie, Up_Comming_Movie } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getUpCommingMovies } from '../redux/MovieSlice';

export const useUpcommingmovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Up_Comming_Movie, Options);
        dispatch(getUpCommingMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}