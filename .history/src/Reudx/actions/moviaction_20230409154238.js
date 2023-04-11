import axios  from "axios"
import { ALLMOVIES, MovieApi } from "../types/moviesType"

export const getAllMovie= () => {
   return async (dispatch) => {
      const res = await axios.get(MovieApi)
      dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages})
   }
}


export const getMovieSearch= (word) => {
   return async (dispatch) => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar-US`)
      dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages})
   }
}


export const getPage= (word) => {
   return async (dispatch) => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar-US`)
      dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages})
   }
}