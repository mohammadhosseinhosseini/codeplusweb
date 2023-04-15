import React from 'react'
import './dist/NotFound404.css'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
    return (
        <div className='notfound-404-page'>
            <section className='wrapper'>
                <div className='container'>
                    <div id='scene' className='scene' data-hover-only='false'>
                        <div className='circle' data-depth='1.2'></div>

                        <div className='one' data-depth='0.9'>
                            <div className='content'>
                                <span className='piece'></span>
                                <span className='piece'></span>
                                <span className='piece'></span>
                            </div>
                        </div>

                        <div className='two' data-depth='0.60'>
                            <div className='content'>
                                <span className='piece'></span>
                                <span className='piece'></span>
                                <span className='piece'></span>
                            </div>
                        </div>

                        <div className='three' data-depth='0.40'>
                            <div className='content'>
                                <span className='piece'></span>
                                <span className='piece'></span>
                                <span className='piece'></span>
                            </div>
                        </div>

                        <p className='p404' data-depth='0.50'>
                            404
                        </p>
                        <p className='p404' data-depth='0.10'>
                            404
                        </p>
                    </div>

                    <div className='text'>
                        <article>
                            <p>
                                Uh oh! Looks like you got lost. <br />
                                Go back to the homepage!
                            </p>
                            <Link to='/'>
                                <button>Home</button>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound404
