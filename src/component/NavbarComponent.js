import Link from 'next/link';
import React from 'react'

export default function NavbarComponent() {
    return (
        <>
            <header class="p-3 text-bg-dark sticky-top">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src="" alt="" />
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link href="/" class="nav-link px-2 text-white">Home</Link></li>
                            <li><Link href="/movie" class="nav-link px-2 text-white">Movies</Link></li>
                            <li><Link href="/movieDetail" class="nav-link px-2 text-white">Movies Detail</Link></li>
                            <li><Link href="/about" class="nav-link px-2 text-white">About Us</Link></li>
                        </ul>

                        <div class="text-end">
                            <Link href="/login" type="button" class="btn btn-outline-warning me-2">Login</Link>
                            <Link href="" type="button" class="btn btn-warning">Sign-up</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
