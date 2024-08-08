import axios from 'axios';
import React from 'react'
import { Options, Popular_Movie, Top_Rated_Movie } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTopRatedMovies } from '../redux/MovieSlice';

export const useTopRatedmovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, Options);
        dispatch(getTopRatedMovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
}