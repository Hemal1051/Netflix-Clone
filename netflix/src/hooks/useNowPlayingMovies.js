import axios from "axios";
import { getNowPlayingMovies } from "../redux/MovieSlice";
import { Now_Playing_Movie, Options } from "../utils/constant";
import { useDispatch } from "react-redux";


const useNowPlayingMovies= async() => {

    const dispatch=useDispatch();
    
    try {
      
      const res=await axios.get(Now_Playing_Movie,Options);
      dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
    }
    export default useNowPlayingMovies;