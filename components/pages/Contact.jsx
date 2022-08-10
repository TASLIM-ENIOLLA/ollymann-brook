import {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../contexts/Global'
import {api_routes} from '../../config/api_route'
import {notify} from '../popups'

export default () => {
    const ContactTabs = [<LeaveAMessage />, <LeaveAReview />]
    const {navRefs: {contact}} = useContext(GlobalContext)
    const [tabIndex, setTabIndex] = useState(false)
    
    return (
        <div ref = {contact} className = 'container'>
            <div className = 'row py-5 my-5'>
                <div className = 'col-12'>
                    <div className = 'mb-5 pb-4'>
                        <p className = 'text-uppercase text-center text-muted'>contact</p>
                        <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>reach out to us</h2>
                    </div>
                </div>
                <div className = 'col-lg-8 mx-auto mb-5 border rounded-1x pt-3 px-md-5'>
                    <div className = 'row pt-4 mb-5'>
                        <div className = 'col-6'>
                            <button onClick = {() => setTabIndex(false)} className = {`${tabIndex ? 'border-0' : 'theme-border-bottom'} transit outline-0 text-muted p-3 bold text-capitalize bg-clear d-block w-100`}>leave a message</button>
                        </div>
                        <div className = 'col-6'>
                            <button onClick = {() => setTabIndex(true)} className = {`${!tabIndex ? 'border-0' : 'theme-border-bottom'} transit outline-0 text-muted p-3 bold text-capitalize bg-clear d-block w-100`}>drop a review</button>
                        </div>
                    </div>
                    {ContactTabs[Number(tabIndex)]}
                </div>
            </div>
            <style jsx>{`
                .theme-border-bottom{
                    border: 0;
                    border-bottom: 4px solid blue;
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
            `}</style>
        </div>
    )
}

const Review = ({onChange, value = 1}) => {
    const [reviewValue, setReviewValue] = useState(value > 0 ? value : 1)

    useEffect(() => onChange(reviewValue), [reviewValue])

    return (
        <div className = 'd-inline-block'>{
            [1,1,1,1,1].map((each, index) => (
                <button onClick = {() => setReviewValue(index + 1)} key = {index} className = 'border-0 outline-0 pr-1 bg-clear'>
                    <span className = {`bi bi-star-fill text-${index + 1 <= reviewValue ? 'warning' : 'muted'}`}></span>
                </button>
            ))
        }</div>
    )
}

const LeaveAReview = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        review: 1,
        message: ''
    })

    return (
        <div className = 'row px-0 pb-5'>
            <div className = 'col-md-6 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>full name</p>
                    <input name = 'name' value = {formData.full_name} onChange = {(e) => setFormData({...formData, full_name: e.target.value})} type = 'text' className = 'underlay d-block w-100 p-3 border rounded-lg' />
                </div>
            </div>
            <div className = 'col-md-6 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>email address</p>
                    <input name = 'email' value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})} type = 'email' className = 'underlay d-block w-100 p-3 border rounded-lg' />
                </div>
            </div>
            <div className = 'col-12 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>message</p>
                    <textarea name = 'message' value = {formData.message} onChange = {(e) => setFormData({...formData, message: e.target.value})} rows = '5' className = 'underlay d-block w-100 p-3 border rounded-lg resize-0'></textarea>
                </div>
            </div>
            <div className = 'col-12 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>review</p>
                    <Review value = {formData.review} onChange = {(e) => setFormData({...formData, review: e})} />
                </div>
            </div>
            <div className = 'col-12 my-4'>
                <div>
                    <button onClick = {() => LeaveReview(formData).then(({type, data}) => notify({
                        type: type === 'success' ? type : 'error',
                        message: data,
                        callback: () => setFormData({
                            full_name: '',
                            email: '',
                            subject: '',
                            message: ''
                        })
                    }))} type = 'button' className = 'overlay d-block w-100 p-3 text-white btn bold theme-bg shadow text-capitalize'>
                        send message
                    </button>
                </div>
            </div>
        </div>
    )
}

const LeaveAMessage = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: ''
    })

    return (
        <div className = 'row px-0 pb-5'>
            <div className = 'col-md-6 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>full name</p>
                    <input name = 'name' value = {formData.full_name} onChange = {(e) => setFormData({...formData, full_name: e.target.value})} type = 'text' className = 'underlay d-block w-100 p-3 border rounded-lg' />
                </div>
            </div>
            <div className = 'col-md-6 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>email address</p>
                    <input name = 'email' value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})} type = 'email' className = 'underlay d-block w-100 p-3 border rounded-lg' />
                </div>
            </div>
            <div className = 'col-12 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>subject</p>
                    <input name = 'name' value = {formData.subject} onChange = {(e) => setFormData({...formData, subject: e.target.value})} type = 'text' className = 'underlay d-block w-100 p-3 border rounded-lg' />
                </div>
            </div>
            <div className = 'col-12 mb-4'>
                <div>
                    <p className = 'text-muted bold text-capitalize'>message</p>
                    <textarea name = 'message' value = {formData.message} onChange = {(e) => setFormData({...formData, message: e.target.value})} rows = '5' className = 'underlay d-block w-100 p-3 border rounded-lg resize-0'></textarea>
                </div>
            </div>
            <div className = 'col-12 my-4'>
                <div>
                    <button onClick = {() => SendMessage(formData).then(({type, data}) => notify({
                        type: type === 'success' ? type : 'error',
                        message: data,
                        callback: () => setFormData({
                            full_name: '',
                            email: '',
                            subject: '',
                            message: ''
                        })
                    }))} type = 'button' className = 'overlay d-block w-100 p-3 text-white btn bold theme-bg shadow text-capitalize'>
                        send message
                    </button>
                </div>
            </div>
        </div>
    )
}


const parseFormData = (formObject) => {
    const formData = new FormData()

    for(let prop in formObject){
        formData.append(prop, formObject[prop])
    }

    return formData
}

const SendMessage = (formData) => fetch(api_routes.contact, {method: 'POST', body: parseFormData(formData)}).then(e => e.json())

const LeaveReview = (formData) => fetch(api_routes.review, {method: 'POST', body: parseFormData(formData)}).then(e => e.json())