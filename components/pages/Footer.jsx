import {useContext} from 'react'
import {GlobalContext} from '../../contexts/Global'

export default () => {
    const {sideBar: {toggle}, navRefs: {home, about, blog, testimonials, directors, contact}} = useContext(GlobalContext)

	return (
		<footer className = 'pt-5 theme-bg px-4'>
            <div className = 'container pt-4'>
                <div className = 'row'>
                    <div className = 'col-12 mb-4'>
                        <div>
                            <img src = './img/ollymann-brook.jpg' width = '120' />
                        </div>
                    </div>
                    <div className = 'col-lg-6 mb-5'>
                        <div>
                            <div className = 'pb-4 text-capitalize text-white'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem</div>
                            <div className = 'pt-4 row'>
                                <div className = 'col-auto'>
                                    <div>
                                        <a href = '' className = 'bi text-white mr-4 fo-s-22 bi-linkedin'></a>
                                    </div>
                                </div>
                                <div className = 'col-auto'>
                                    <div>
                                        <a href = '' className = 'bi text-white mr-4 fo-s-22 bi-instagram'></a>
                                    </div>
                                </div>
                                <div className = 'col-auto'>
                                    <div>
                                        <a href = '' className = 'bi text-white mr-4 fo-s-22 bi-facebook'></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-lg-6 mb-5'>
                        <div className = 'row'>
                            <div className = 'col-md-6 mb-5'>
                                <div>
                                    <h5 className = 'bold text-white mb-4'>Company</h5>
                                    <div className = 'text-capitalize text-white'>
                                        <button onClick = {() => home.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 d-block mb-3 text-capitalize text-white'>home</button>
                                        <button onClick = {() => about.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 d-block mb-3 text-capitalize text-white'>about us</button>
                                        <button onClick = {() => directors.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 d-block mb-3 text-capitalize text-white'>directors</button>
                                        <button onClick = {() => contact.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 d-block mb-3 text-capitalize text-white'>contact</button>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-md-6 mb-5'>
                                <div>
                                    <h5 className = 'bold text-white mb-4'>Products</h5>
                                    <div className = 'text-capitalize text-white'>
                                        <a className = 'd-block mb-3' href = '/'>Sachet Water</a>
                                        <a className = 'd-block mb-3' href = '/'>Bottled Water</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	)
}