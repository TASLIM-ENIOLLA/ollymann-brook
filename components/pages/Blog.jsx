import {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../contexts/Global'

const BlogCard = () => (
    <div className = 'blog-card p-4 border-bottom text-muted user-select-0' style = {{cursor: 'pointer'}}>
        <div style = {{height: '150px'}} className = 'bg-dark rounded-1x'>
            
        </div>
        <p className = 'text-uppercase my-3'>technology</p>
        <a href = '' className = 'theme-color bold text-capitalize double-line w-100 mb-2'>
            lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem um dolor sit amet cipsum dolor sit amet consectuer adipising lorem ipsonsectuer dolor sit amet cipsum dolor sit amet consectuer adipising lorem.
        </a>
        <div className = 'row a-i-c j-c-space-between mt-3 mb-4'>
            <div className = 'col-auto mb-2'>
                <div>15 March 2022</div>
            </div>
            <div className = 'col-auto mb-2'>
                <div>5 mins read</div>
            </div>
        </div>
    </div>
)

export default () => {
    const {navRefs: {blog}} = useContext(GlobalContext)

    return (
        <div ref = {blog} className = 'container'>
            <div className = 'row py-5 my-5'>
                <div className = 'col-12'>
                    <div className = 'mb-5 pb-4'>
                        <p className = 'text-uppercase text-center text-muted'>blog</p>
                        <h2 className = 'text-capitalize bold text-dark text-center line-height-120pcent px-0'>our latest news</h2>
                    </div>
                </div>
                <div className = 'col-12 mb-5'>
                    <div className = 'row no-wrap overflow-x-auto thin-scrollbar'>
                        <div className = 'col-10 col-sm-9 col-md-5 col-lg-4 mb-4'>
                            <BlogCard />
                        </div>
                        <div className = 'col-10 col-sm-9 col-md-5 col-lg-4 mb-4'>
                            <BlogCard />
                        </div>
                        <div className = 'col-10 col-sm-9 col-md-5 col-lg-4 mb-4'>
                            <BlogCard />
                        </div>
                        <div className = 'col-10 col-sm-9 col-md-5 col-lg-4 mb-4'>
                            <BlogCard />
                        </div>
                        <div className = 'col-10 col-sm-9 col-md-5 col-lg-4 mb-4'>
                            <BlogCard />
                        </div>
                        <div className = 'col-10 col-sm-9 col-md-5 col-lg-4 mb-4'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}