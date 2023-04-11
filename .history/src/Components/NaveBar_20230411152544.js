import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllMovie, getMovieSearch } from '../Reudx/actions/moviaction';

const NavBar = () => {

  const Onsearch = (word) => {
    search(word)
  }

  const dispatch = useDispatch()
    // search
    const search = async (word) => {
      if (word === "") {
        dispatch(getAllMovie())
      } else{
        dispatch(getMovieSearch(word))
    }
  }

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="02" lg="1" className='remov'>
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="12" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => Onsearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar