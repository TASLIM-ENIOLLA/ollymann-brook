import {useContext} from 'react'
import {GlobalContext} from '../../contexts/Global'

export default () => {
    const {navRefs: {about}} = useContext(GlobalContext)

    return (
        <div ref = {about} className = 'container'>
            <div className = 'row py-5 my-5' style = {{flexDirection: 'row-reverse'}}>
                <div className = 'col-lg-6 mb-5'>
                    <div className = 'pb-4'>
                        <p className = 'text-uppercase text-muted'>about</p>
                        <h2 className = 'text-capitalize bold text-dark line-height-120pcent col-lg-10 px-0'>what we do at ollymann brook</h2>
                        <p className = 'pb-4 text-capitalize text-muted pt-3'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer adipising lorem ipsum dolor</p>
                        <div className = 'row pt-4'>
                            <div className = 'col-md-6 mb-4'>
                                <div>
                                    <h4 className = 'text-primary bold mb-4'>100+</h4>
                                    <h4 className = 'bold mb-3 text-capitalize text-dark'>sachet water</h4>
                                    <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</p>
                                </div>
                            </div>
                            <div className = 'col-md-6 mb-4'>
                                <div>
                                    <h4 className = 'text-primary bold mb-4'>573+</h4>
                                    <h4 className = 'bold mb-3 text-capitalize text-dark'>bottled water</h4>
                                    <p className = 'text-muted text-capitalize'>lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-lg-6 mb-5'>
                    <div className = ''>
                        <img src = '/img/feature-2.png' className = 'd-block w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}