import {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../contexts/Global'

const TestimonialCard = () => (
    <div className = 'testimonial-card bg-light p-4 rounded-1x'>
        <div className = 'rounded-1x shadow-sm bg-white p-4'>
            <p className = 'text-muted text-capitalize'>
                lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem.
            </p>
            <div className = 'row a-i-c j-c-space-between mt-3'>
                <div className = 'col'>
                    <div className = 'row a-i-c'>
                        <div className = 'col-auto mb-2'>
                            <div className = 'rounded-circle shadow' style = {{width: '55px', height: '55px'}}></div>
                        </div>
                        <div className = 'col mb-2'>
                            <div>
                                <p className = 'text-muted bold mb-0'>Adam Jonatham</p>
                                <div className = 'text-muted'>2 days ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-auto'>
                    <div>
                        <span className = 'bi bi-star-fill fo-s-16 text-warning mx-1'></span>       
                        <span className = 'bi bi-star-fill fo-s-16 text-warning mx-1'></span>       
                        <span className = 'bi bi-star-fill fo-s-16 text-warning mx-1'></span>       
                        <span className = 'bi bi-star-fill fo-s-16 text-muted mx-1'></span>       
                        <span className = 'bi bi-star-fill fo-s-16 text-muted mx-1'></span>      
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default () => {
    const {navRefs: {testimonials}} = useContext(GlobalContext)

    return (
        <div ref = {testimonials} className = 'container'>
            <div className = 'row py-5 my-5'>
                <div className = 'col-12'>
                    <div className = 'mb-5 pb-4'>
                        <p className = 'text-uppercase text-center text-muted'>testimonials</p>
                        <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>our customers say</h2>
                    </div>
                </div>
                <div className = 'col-12 mb-5'>
                    <div className = 'row no-wrap overflow-x-auto thin-scrollbar'>
                        <div className = 'col-11 col-sm-8 col-lg-6 col-xl-4 mb-4'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-sm-8 col-lg-6 col-xl-4 mb-4'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-sm-8 col-lg-6 col-xl-4 mb-4'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-sm-8 col-lg-6 col-xl-4 mb-4'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-sm-8 col-lg-6 col-xl-4 mb-4'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-sm-8 col-lg-6 col-xl-4 mb-4'>
                            <TestimonialCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}