import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';

const MovisDetails = ({movies}) => {

    const param = useParams();

    const [movi, setmovi] = useState([])
      // get all movies
  const getallMovisDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US`)
    setmovi(res.data)
  }

  useEffect(() => {
  getallMovisDetails()
  },[])

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="4">
                <Col/>
                <Col md="8" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">

                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movi.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{movi.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {movi.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{movi.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movi.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={movi.homepage} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovisDetails
