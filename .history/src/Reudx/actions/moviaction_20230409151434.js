import { axios } from "axios"
import { ALLMOVIES, MovieApi } from "../types/moviesType"

export const getAllMovie= () => {
   return async (dispatch) => {
      const res = await axios.get(MovieApi)
      dispatch({type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages})
   }
}