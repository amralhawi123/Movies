import { ALLMOVIES } from "../types/moviesType"


export const getAllMovie= () => {
   return {type:ALLMOVIES, data:[1,2,3,]}
}