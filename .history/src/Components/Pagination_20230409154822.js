import React from 'react'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPage } from '../Reudx/actions/moviaction';

const PaginationComponent = () => {

    
    const [PageCount, setPageCount] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => { 
        setPageCount(pages)
        
    }, [])

    const pages = useSelector((state)=> state.pageCount )
    
    
    // get Currnt Page
  const getPageMovie = async (page) => {
     
    }
    
    const handlePageClick = (data) => {
      getPage(data.selected + 1)
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
