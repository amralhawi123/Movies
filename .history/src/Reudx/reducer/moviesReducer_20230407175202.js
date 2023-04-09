import {ALLMOVIES} from '../types/moviesType'

export const moviesReducer = (state ={movies: [], page}, action) => {
   switch (action.type) {
      case ALLMOVIES:
         return {movies: action.data}
         break;
      default:
         break;
   }


}