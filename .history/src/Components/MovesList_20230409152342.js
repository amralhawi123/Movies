import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
import { useEffect, useState } from "react";
const MovesList = ({getPage, PageCount}) => {

  const [movies, setmovies] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMovie())
    }, [])

  const datamovies = useSelector((state)=> state.movies )
  
  useEffect(() => {
    setmovies(datamovies)
  }, [datamovies])


  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie mov={mov} key={mov.id}/>)
      })) : <h2 className="text-center p-5"> لا يوجد افلام ...</h2>}
      {movies.length >= 1 ?<PaginationComponent getPage={getPage} PageCount={PageCount}/>
: null}
    </Row>
  );
};

export default MovesList
