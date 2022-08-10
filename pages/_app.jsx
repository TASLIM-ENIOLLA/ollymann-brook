import Head from 'next/head'
import {GlobalContext} from '../contexts/Global'
import {useState, useRef} from 'react'

export default ({Component, pageProps}) => {
    const home = useRef()
    const about = useRef()
    const subsidiaries = useRef()
    const directors = useRef()
    const blog = useRef()
    const testimonials = useRef()
    const contact = useRef()

    const [sideBarState, setSideBarState] = useState(false)

    const GlobalContextValue = {
        sideBar: {
            toggle: () => setSideBarState(!sideBarState),
            open: sideBarState,
        },
        navRefs: {home, about, subsidiaries, directors, blog, testimonials, contact}
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="/css/common.css" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/animate/animate.css" />
                <link rel="stylesheet" href="/b-icon/font/bootstrap-icons.css" />
                <link rel="icon" href="./ollymann-brook.jpg" sizes="32x32" type="image/png" />
                <link href = './ollymann-brook.jpg' rel = 'shortcut icon' />
                <title>Ollymann Brook</title>
            </Head>
            <GlobalContext.Provider value = {GlobalContextValue}>
                <Component className = "po-rel" style = {{zIndex: 0}} {...pageProps} />
            </GlobalContext.Provider>
            <div id = '__popup'></div>
        </>
    )
}
