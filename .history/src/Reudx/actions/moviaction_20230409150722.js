import { Axios } from "axios"
import { ALLMOVIES, MovieApi } from "../types/moviesType"

export const getAllMovie= () => {

   return async (dispatch) => {
      const res = await Axios.get(MovieApi)
      dispatch()
   }

   return 
}