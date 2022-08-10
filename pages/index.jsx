import {useContext} from 'react'
import {GlobalContext} from '../contexts/Global'

import Header from '../components/pages/Header'
import HeroBg from '../components/pages/HeroBg'
import Features from '../components/pages/Features'
import About from '../components/pages/About'
import Directors from '../components/pages/Directors'
import Testimonials from '../components/pages/Testimonials'
import Blog from '../components/pages/Blog'
import Contact from '../components/pages/Contact'
import Footer from '../components/pages/Footer'

export default () => {
    const {sideBar: {toggle}, navRefs: {home, about, subsidiaries, directors, contact}} = useContext(GlobalContext)

    return (
        <section className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'w-100 flex-1 overflow-y-auto'>
                <HeroBg />
                <main className = 'px-4'>
                    <Features />
                    <About />
                    <Directors />
                    <Testimonials />
                    <Blog />
                    <Contact />
                </main>
                <Footer />
            </section>
            <style jsx>{`
                .line-height-120pcent{
                    line-height: 130%;
                }
                .text-shadow{
                    text-shadow: 0px 0px 10px grey;
                }
            `}</style>
        </section>
    )
}
