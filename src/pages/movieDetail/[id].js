import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY, IMAGE_BASE_PATH } from '@/library/key';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Movie() {
    const router = useRouter();
    // console.log(router.query);

    const [id, setId] = useState(router.query.id);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [key, setKey] = useState();


    useEffect(() => {
        setLoading(true)
        fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
            .then((respone) => respone.json())
            .then((data) => {
                console.log("movie url ", data)
                const key = data.results[0].key;
                setKey(key);
            })
        fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data)
                setMovie(data)
                setLoading(false)
            }).catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading) {

    }

    return (
        <>

            <div className='container mb-5'>
                <br />
                <div className="row mt-5">
                    <div className="col-sm-6 text-center mt-0 align-items-end m-auto d-flex justify-content-center">
                        <div class="card bg-dark text-white" style={{ width: "20rem" }}>
                            <img src={movie.backdrop_path ? IMAGE_BASE_PATH + movie.backdrop_path : "https://t3.ftcdn.net/jpg/01/17/72/36/360_F_117723612_z7zQmUrrpG4IRGQLvgX5nwtwC18ke3qU.jpg"} className="card-img" alt="..." />
                        </div>
                    </div>
                    <div className="col-sm-6 text-start mt-5 pt-5 pe-5">
                        <h3>Title : {movie.title ? movie.title : "Unknown"}</h3>
                        <h4>Langauge : {movie.original_language ? movie.original_language : "Languages"}</h4>
                        <h4>{movie.status ? movie.status : "status"} : {movie.release_date ? movie.release_date : "Release date"}</h4>
                        <p>{movie.overview ? movie.overview : "No Description"}</p>
                        <Button variant="primary" onClick={handleShow}>
                            Display Video
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <div class="ratio ratio-16x9">
                        <iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video" allowfullscreen></iframe>
                    </div>
                </Modal>
            </div>
        </>
    )
}
