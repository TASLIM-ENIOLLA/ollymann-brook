import {useContext} from 'react'
import {GlobalContext} from '../contexts/Global'

export const SideBar = ({children}) => {
    const {sideBar: {toggle, open}, navRefs: {home, about, subsidiaries, directors, testimonials, blog, contact}} = useContext(GlobalContext)

    return (
        <>
            <div className = {`${open ? '' : 'd-none'} animated fadeIn vh100 vw100 po-fixed top-0 left-0`} style = {{zIndex: 1500, background: 'rgba(0,0,0,.5)'}}>
                <div className = 'container-fluid p-0'>
                    <div className = 'row'>
                        <div className = 'col-auto'>
                            <div className = {`${open ? '' : 'd-none'} animated slideInLeft bg-white px-4 flex-v py-5 vh100`} style = {{width: '280px'}}>
                                <div className = 'mb-4'>
                                    <a href = '/'>
                                        <img src = './img/ollymann-brook.jpg' width = '100' />
                                    </a>
                                </div>
                                <div className = 'py-3 flex-1 overflow-y-auto'>
                                    <button onClick = {() => {
                                        home.current.scrollIntoView({behavior: 'smooth'})
                                        toggle()
                                    }} className = 'bg-clear border-0 text-capitalize d-block text-dark py-3 bold transit mb-3'>home</button>
                                    <button onClick = {() => {
                                        about.current.scrollIntoView({behavior: 'smooth'})
                                        toggle()
                                    }} className = 'bg-clear border-0 text-capitalize d-block text-dark py-3 bold transit mb-3'>about</button>
                                    <button onClick = {() => {
                                        subsidiaries.current.scrollIntoView({behavior: 'smooth'})
                                        toggle()
                                    }} className = 'bg-clear border-0 text-capitalize d-block text-dark py-3 bold transit mb-3'>subsidiaries</button>
                                    <button onClick = {() => {
                                        testimonials.current.scrollIntoView({behavior: 'smooth'})
                                        toggle()
                                    }} className = 'bg-clear border-0 text-capitalize d-block text-dark py-3 bold transit mb-3'>testimonials</button>
                                    <button onClick = {() => {
                                        blog.current.scrollIntoView({behavior: 'smooth'})
                                        toggle()
                                    }} className = 'bg-clear border-0 text-capitalize d-block text-dark py-3 bold transit mb-3'>blog</button>
                                    <button onClick = {() => {
                                        contact.current.scrollIntoView({behavior: 'smooth'})
                                        toggle()
                                    }} className = 'bg-clear border-0 text-capitalize d-block text-dark py-3 bold transit mb-3'>contact</button>
                                </div>
                            </div>
                        </div>
                        <div className = 'col'>
                            <div className = {`vh100`} onClick = {() => toggle()}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}