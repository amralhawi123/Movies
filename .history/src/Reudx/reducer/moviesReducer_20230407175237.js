import {ALLMOVIES} from '../types/moviesType'


const initailValue = {movies: [], pageCount:0}
export const moviesReducer = (state =, action) => {
   switch (action.type) {
      case ALLMOVIES:
         return {movies: action.data}
         break;
      default:
         break;
   }


}