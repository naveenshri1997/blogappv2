import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';
const AddPost = () => {
    const wrapRef = React.useRef(null);
    const history = useNavigate();
    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }

    const editor = useRef(null);

    const [post_title,setpost_title] = useState('');
    const [post_para,setpost_para] = useState('');
    const [category,setcategory] = useState('');
    const [image, setimage] = useState('');
    const [error, seterrror] = React.useState(false);
    const addpost = async (e) => {

        e.preventDefault();
        if (!post_title || !category|| !image|| !post_para) {
            seterrror(true);
            return false
        }
        const formData = new FormData();
        
        formData.append('post_title', post_title);
        formData.append('post_para', post_para);
        formData.append('category',category);
        formData.append('image', image);



        console.log("add", formData);

        const res = await fetch('https://blogv2server.onrender.com/addpost', {
            method: 'POST',                                
              body: formData,
        });
        const data = await res.json();
        if (res.status == 500 || !data) {
            window.alert("data not added");
        } else {
            history('/addpost');
            toast.success('Post Added Sucessfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            timer();
        }
    }
    const timer = () => {
        setTimeout(() => {
            window.location.reload(false);
        }, 15300);
    }
    return (
        <>
            <div className="wrapper" ref={wrapRef} >
                <div onClick={overlay} id="overlay" ></div>
                <Sidebar />
                <div className="content">
                    <TopNavbar showsidebar={showsidebar} />
                    <ToastContainer />
                    <main className="bg-opacity-25 min-vh-100" style={{ background: '#e2e2e2e3' }}>
                        <div className="container-fluid p-3 p-md-4">
                            <div className="card rounded">
                                <div className="card-body">
                                    <form method='POST' encType='multipart/form-data'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Add Post</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />                                                                            
                                      
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Post Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={post_title} onChange={(e) => setpost_title(e.target.value)} />
                                                {error && !post_title && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>                                          
                                                                                                                  
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Post Details</label>
                                            <div className="col-sm-9">
                                                <JoditEditor
                                                    ref={editor}
                                                    value={post_para}
                                                    tabIndex={1} // tabIndex of textarea
                                                    onBlur={newContent => setpost_para(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    onChange={newContent => { }}
                                                />
                                                {error && !post_para && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>  
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Post Category</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={category} onChange={(e) => setcategory(e.target.value)} />
                                                {error && !category && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>      
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Upload Post image</label>
                                            <div className="col-sm-9">
                                                <input type="file" className="form-control" onChange={(e) => setimage(e.target.files[0])} />
                                                {error && !image && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>                                                                     
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" onClick={addpost} value="Add Post" className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="bg-light shadow text-secondary text-center d-flex flex-column flex-md-row justify-content-between p-3 p-md-4">
                        <div>Copyright &copy; 2024 </div>
                        <div>Made with in ME</div>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default AddPost;
