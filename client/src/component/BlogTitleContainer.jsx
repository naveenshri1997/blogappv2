import React from 'react'
import bai from '../bai.jpg'
// import blogimgcom from '../blog1.png'
import { Link } from 'react-router-dom'
const BlogTitleContainer = ({blogs}) => {
    const url = "https://blogv2server.onrender.com";
    // {`http://localhost:5000/${row.image.slice(14)}`} 
    return (
        <>  
        <Link className='cus_link' to={`/blog/${blogs._id}`}>
            <div className='blog_container'>
                <div className='author'>
                    <div className="author_img"><img src={`${url}/${blogs.author[0].author_image.slice(14)}`} alt="bai" className='img-fluid' /></div>
                    <div className="author_title hev">{blogs.author[0].name}</div>
                    <div className="author_date hev">{`${blogs.author[0].time?blogs.author[0].time.slice(0,10):''}`}</div>
                </div>
                <div className='blog_detail'>
                <div className="bdp2">
                        <img src={`${url}/${blogs.image.slice(14)}`} className='img-fluid' alt="" />
                    </div>
                    <div className='bdp1'>
                        <h2 className='blog_title text-start'>{blogs.post_title}</h2>
                        <h3 className='blog_para text-start'>
                        {blogs.post_para.length > 250 ?
                            `${blogs.post_para.substring(0, 250)}...` : blogs.post_para
                        }</h3>
                    </div>                    
                </div>
                <div className='blog_tag'>
                    <div className="bt">
                        <h5 className='me-2'> <span class="rounded-pill cus_bg2 fw-normal badge text-dark">{blogs.category}</span> </h5>
                    </div>
                    <div className='bttime'><p className='text-secondary'>9 min read</p></div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default BlogTitleContainer
