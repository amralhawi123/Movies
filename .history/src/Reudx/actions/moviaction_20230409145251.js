import { Axios } from "axios"
import { ALLMOVIES } from "../types/moviesType"


export const getAllMovie= () => {

   const res = await Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US")

   return {type:ALLMOVIES, data:[1,2,3,3], pages:0}
}