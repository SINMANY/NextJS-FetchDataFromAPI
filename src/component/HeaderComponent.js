import Link from 'next/link'
import React from 'react'

export default function HeaderComponent() {
    return (
          <>
            <div className='container mb-5'>
                <br />
                <div className="row mt-5">
                    <div className="col-sm-6 text-center mt-5 pt-4 ">
                        <div className='mt-5 '>
                            <h1 className="fw-semibold mb-4">Welcome to Manny Movies</h1>
                            <p className="fs-4">Let's explore the new thing with Manny movies</p>
                            <p className="fs-5">Many movies are popular from around the world are in Manny Movies</p>
                        </div>
                        <Link href="/movie" type="button" className="btn btn-primary mt-3 mb-4 ps-4 pe-4 fs-6 fw-semibold">Let's enjoy together</Link>
                    </div>

                    <div className="col-sm-6 text-center mt-0 align-items-end">
                        <img src="https://media.istockphoto.com/id/1409271522/photo/the-mans-hands-are-holding-black-with-yellow-clapper-board-or-movie-slate-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=vb-Ae8pOyZ3VwIJjqj5mv1gud1bWrntZxAsMFOIlEpc=" alt="Software Engineering Academy of Phnom Penh" style={{ width: "560px", height: "370px" }} className="img-fluid img-md-fluid m-4 "></img>
                    </div>
                </div>
            </div>

        </>
    )
}
