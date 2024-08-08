import Body from "./components/Body";
import toast, { Toaster } from 'react-hot-toast';
import MovieDialog from "./components/Moviedialog";

function App() {
  return (
  <>
   <Body />
   <Toaster/>
   <MovieDialog/>
  </>

  );
}

export default App;
