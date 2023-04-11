import { Axios } from "axios"
import { ALLMOVIES, MovieApi } from "../types/moviesType"

export const getAllMovie= () => {

   return async () => {
      const res = Axios.get(MovieApi)
   }

   return {type:ALLMOVIES, data:res.data.results, pages:res.data.total_pages}
}