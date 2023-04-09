import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NaveBar";
import MovesList from './Components/MovesList';
import axios from 'axios'
import { useEffect, useState } from "react";
import MovisDetails from "./Components/MovisDetails";
import 
function App() {

  const [movies, setmovies] = useState([])
  const [PageCount, setPageCount] = useState(0)

  // get all movies
  const getallMovis = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US")
    setmovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  // get Currnt Page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US&page=${page}`)
    setmovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  useEffect(() => {
  getallMovis()
  }, [])

  // search
  const search = async (word) => {
    if (word === "") {
      getallMovis()
    } else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar-US`)
    setmovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
}

  return (
    <div className="font color-body ">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovesList movies={movies} getPage={getPage} PageCount={PageCount}/>}/>
            <Route path="/movie/:id" element={<MovisDetails movies={movies}/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
