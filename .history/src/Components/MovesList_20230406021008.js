import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
const MovesList = ({movies, getPage, PageCount}) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie mov={mov} key={mov.id}/>)
      })) : <h2 className="text-center p-5"> لا يوجد افلام ...</h2>}
      {movies}
      <PaginationComponent getPage={getPage} PageCount={PageCount}/>
    </Row>
  );
};

export default MovesList
