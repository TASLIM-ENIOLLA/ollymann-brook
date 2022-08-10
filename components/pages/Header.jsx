import {useContext} from 'react'
import {SideBar} from '../SideBar'
import {GlobalContext} from '../../contexts/Global'
export default () => {
	const {sideBar: {toggle}, navRefs: {home, about, subsidiaries, blog, testimonials, directors, contact}} = useContext(GlobalContext)

	return (
		<header className = 'w-100 bg-white shadow' style = {{zIndex: 1000}}>
            <div className = 'container'>
                <div className = 'row j-c-space-between a-i-c py-2 py-lg-4'>
                    <div className = 'col-md-auto'>
                        <div className = 'row a-i-c'>
                            <SideBar />
                            <div className = 'col-lg-d-none col-auto pr-0'>
                                <button onClick = {() => toggle()} className = 'bg-clear border-0 p-2 bi bi-filter-left fa-3x'></button>
                            </div>  
                            <a href = '/' className = 'col-auto'>
                                <img src = './img/ollymann-brook.jpg' height = '40' />
                            </a>
                        </div>
                    </div>
                    <div className = 'col-d-none col-lg-d-block col-md-auto'>
                        <div>
                            <button onClick = {() => home.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>home</button>
                            <button onClick = {() => about.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>about</button>
                            <button onClick = {() => directors.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>directors</button>
                            <button onClick = {() => testimonials.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>testimonials</button>
                            <button onClick = {() => blog.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>blog</button>
                            <button onClick = {() => contact.current.scrollIntoView({behavior: 'smooth'})} className = 'bg-clear border-0 text-capitalize d-inline-block text-dark px-3 bold transit mx-3'>contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
	)
}