import { useState, useEffect } from 'react'
import React from 'react'
import Header from './Header'
import bai from '../bai.jpg'
import blogimgcom from '../blog1.png'
import SquareRelatedblog from './SquareRelatedblog'
import { useParams } from "react-router-dom";
export const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setblog] = useState([]);
    useEffect(() => {
        const res = fetch(`https://blogv2server.onrender.com/showonepost/${id}`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setblog(data.data);        
        })         
    }, [id])
    console.log(blog);
    const url = "http://localhost:5000";
  return (
    <>
    <Header/>
    <section>
        <div className="container">
            <div className="row justify-content-start">
            <div className="col-lg-6 offset-lg-3">
            <div className='Single_blog_container'>
            <div className='blog_detail'>
                    <div className='bdp1'>
                        {
                            blog.map((data) =>{
                                return(
                                    <h2 className='blog_title text-start fs-1'>{data.post_title}</h2>
                                )
                            }
                        )}
                        {/* <h3 className='blog_para text-start hev'>By Mary Moore, copywriter at Shakuro The ever-shifting
                            landscape of digital innovation</h3> */}
                    </div>                
                </div>

                <div className='author'>
                {
                            blog.map((data) =>{
                                return(
                                    <>    
                    <div className="author_img"><img src={`${url}/${data.author_id.author_image.slice(14)}`} alt="bai" className='img-fluid' /></div>
                     <div className="author_title hev">{data.author_id.name}</div>
                    <div className="author_date hev">{`${data.author_id.time?data.author_id.time.slice(0,10):''}`}</div>                            
                    </>
                    )
                })}
                </div>                               
                
                 <div className="bdp2">
                { blog.map((data) =>{
                                return(
                                    <>
                    <img src={`${url}/${data.image.slice(14)}`} className='img-fluid' width="100%" alt="" />
                    <h4 className='fs-5 fw-normal mt-5 text-center'>
                        {data.post_para}
                    </h4>
                    </>
                    )
                    })}
                    </div>
            </div>                
            </div>
            </div>
        </div>       
    </section>
    <section className='bg-light py-4'>
        <div className="container-fluid">
        <div className="row justify-content-start">
        <div className="col-lg-6 offset-lg-3">
           <div className="row">
           <div className="col-md-6">
            <SquareRelatedblog/>
            </div>
            <div className="col-md-6">                     
            <SquareRelatedblog/>
            </div>
           </div>
        </div>
        </div>
        </div>
        </section>
    </>
  )
}
