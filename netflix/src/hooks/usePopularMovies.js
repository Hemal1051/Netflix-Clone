import axios from 'axios';
import React from 'react'
import { Options, Popular_Movie } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getPopularMovie } from '../redux/MovieSlice';

export const usePopularmovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movie, Options);
        dispatch(getPopularMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}