import {ALLMOVIES} from '../types/moviesType'


const initailValue = 
export const moviesReducer = (state ={movies: [], pageCount:0}, action) => {
   switch (action.type) {
      case ALLMOVIES:
         return {movies: action.data}
         break;
      default:
         break;
   }


}