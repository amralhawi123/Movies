import React from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPage } from '../Reudx/actions/moviaction';

const PaginationComponent = () => {

    const handlePageClick = (data) => {
      getPage(data.selected + 1)
  }
 
  const [PageCount, setPageCount] = useState(0)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPage())
    }, [dispatch])

  const pages = useSelector((state)=> state.pageCount )


  // get Currnt Page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US&page=${page}`)
    // setmovies(res.data.results)
    setPageCount(pages)
  }


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={PageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
