import { Axios } from "axios"
import { ALLMOVIES, MovieApi } from "../types/moviesType"

export const getAllMovie= async () => {

   const res = await Axios.get(MovieApi)

   return {type:ALLMOVIES, data:res.data.results, pages:0}
}