import React from 'react'
import bai from '../bai.jpg'
const RelatedBlog = () => {
  return (
    <>
    <h3 className='bctitle mt-4'>Related Blogs</h3>
    <div className='blog_container pb-2'>
                <div className='author'>
                    <div className="author_img"><img src={bai} alt="bai" className='img-fluid' /></div>
                    <div className="author_title hev">Sheila Teo in Towards Data Science</div>
                </div>                
                <div className='blog_detail'>
                    <div className='bdp1'>
                        <h2 style={{'font-size':'15px'}} className='blog_title text-start'>Back-End & Web Development Trends For 2024</h2>
                     </div>                   
                </div>
            </div>
            <div className='blog_container pb-2'>
                <div className='author'>
                    <div className="author_img"><img src={bai} alt="bai" className='img-fluid' /></div>
                    <div className="author_title hev">Sheila Teo in Towards Data Science</div>
                </div>                
                <div className='blog_detail'>
                    <div className='bdp1'>
                        <h2 style={{'font-size':'15px'}} className='blog_title text-start'>Back-End & Web Development Trends For 2024</h2>
                     </div>                   
                </div>
            </div>
    </>
  )
}

export default RelatedBlog