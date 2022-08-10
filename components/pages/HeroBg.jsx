import {useContext} from 'react'
import {GlobalContext} from '../../contexts/Global'

export default () => {
	const {navRefs: {home}} = useContext(GlobalContext)

	return (
		<>
			<div ref = {home} className = 'hero-bg flex-v j-c-c'>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-12 text-center'>
                            <h1 className = 'bold text-jumbotron text-white'>Ollymann Brook</h1>
                            <h3 className = 'text-capitalize text-warning'>lorem ipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor</h3>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hero-bg{
                    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(/img/banner-bk.jpg);
                    background-position: center;
                    background-size: cover;
                    min-height: 80vh;
                }
            `}</style>
		</>
	)
}