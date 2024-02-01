import React from 'react'
import bai from '../bai.jpg'
import blogimgcom from '../blog1.png'
import { Link } from 'react-router-dom'
const SquareRelatedblog = () => {
  return (
    <>
    <Link className='cus_link' to={`/blog/id`}>
            <div className='square_blog_container'>
                <div className="img_box">
                    <img src={blogimgcom} className='img-fluid' width="100%" alt="" />
                </div>
                <div className='author'>
                    <div className="author_img"><img src={bai} alt="bai" className='img-fluid' /></div>
                    <div className="author_title hev">fatfish in JavaScript in Plain English</div>                   
                </div>
                <div className='blog_detail'>
                    <div className='bdp1'>
                        <h2 className='blog_title text-start'>Back-End & Web Development Trends For 2024</h2>
                        <h3 className='blog_para text-start'>By Mary Moore, copywriter at Shakuro The ever-shifting
                            landscape of digital innovation can feel like...</h3>
                    </div>                    
                </div>
                <div className='blog_tag'>
                    <div className="bt">
                        <h5 className='me-3'> <span class="rounded-pill cus_bg2 fw-normal badge text-dark px-4">Primary</span> </h5>
                        <h5 className='me-3'> <span class="rounded-pill cus_bg2 fw-normal badge text-dark px-4">Secondary</span> </h5>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default SquareRelatedblog