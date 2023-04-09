import {ALLMOVIES} from '../types/moviesType'

export const moviesReducer = (state ={mov}, action) => {
   switch (action.type) {
      case ALLMOVIES:
         return {movies: action.data}
         break;
      default:
         break;
   }


}