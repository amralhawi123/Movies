import { Axios } from "axios"
import { ALLMOVIES } from "../types/moviesType"
import { MovieApi } from "../types/moviesType"

export const getAllMovie= async () => {

   const res = await Axios.get()

   return {type:ALLMOVIES, data:[1,2,3,3], pages:0}
}