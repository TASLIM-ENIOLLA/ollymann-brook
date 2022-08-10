import {useContext} from 'react'
import {GlobalContext} from '../../contexts/Global'

export default () => {
    const {navRefs: {directors}} = useContext(GlobalContext)

    return (
        <div ref = {directors} className = 'container'>
            <div className = 'row py-5 my-5'>
                <div className = 'col-12'>
                    <div className = 'mb-5 pb-4'>
                        <p className = 'text-uppercase text-center text-muted'>directors</p>
                        <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>meet our directors</h2>
                    </div>
                </div>
                <div className = 'col-lg-6 mb-5'>
                    <div className = 'row'>
                        <div className = 'col-md-4 mb-3'>
                            <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                <img src = '/img/member-3.jpg' className = 'd-block w-100' />
                            </div>
                        </div>
                        <div className = 'col-md-8'>
                            <div>
                                <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                <p className = 'text-primary text-capitalize'>managing director</p>
                                <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                <div className = 'pt-4'>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-lg-6 mb-5'>
                    <div className = 'row'>
                        <div className = 'col-md-4 mb-3'>
                            <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                <img src = '/img/member-2.jpg' className = 'd-block w-100' />
                            </div>
                        </div>
                        <div className = 'col-md-8'>
                            <div>
                                <h5 className = 'bold text-dark text-capitalize'>Joe Doe</h5>
                                <p className = 'text-primary text-capitalize'>managing director</p>
                                <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                <div className = 'pt-4'>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-lg-6 mb-5'>
                    <div className = 'row'>
                        <div className = 'col-md-4 mb-3'>
                            <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                <img src = '/img/member-1.jpg' className = 'd-block w-100' />
                            </div>
                        </div>
                        <div className = 'col-md-8'>
                            <div>
                                <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                <p className = 'text-primary text-capitalize'>managing director</p>
                                <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                <div className = 'pt-4'>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-lg-6 mb-5'>
                    <div className = 'row'>
                        <div className = 'col-md-4 mb-3'>
                            <div style = {{maxHeight: '250px'}} className = 'overflow-0'>
                                <img src = '/img/member-3.jpg' className = 'd-block w-100' />
                            </div>
                        </div>
                        <div className = 'col-md-8'>
                            <div>
                                <h5 className = 'bold text-dark text-capitalize'>Jane Doe</h5>
                                <p className = 'text-primary text-capitalize'>managing director</p>
                                <div className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</div>
                                <div className = 'pt-4'>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-linkedin'></a>
                                    <a href = '' className = 'bi text-muted mr-4 fo-s-22 bi-facebook'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}