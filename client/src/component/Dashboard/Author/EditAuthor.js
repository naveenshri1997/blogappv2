import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import JoditEditor from 'jodit-react';
const EditAuthor = () => {
    const { id } = useParams();
    const history = useNavigate();
    const wrapRef = React.useRef(null);

    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }
        
    const editor = useRef(null);
    const [name,setname] = useState('');
    const [author_image, setauthor_image] = useState('');    
    
    useEffect(() => {
        getoneauthor();
    }, [])

    const getoneauthor = async () => {
        const res = await fetch(`https://blogv2server.onrender.com/showoneauthor/${id}`);
        const data = await res.json();
        console.log('dta', data);
        setname(data.data.name);
        setauthor_image(data.data.author_image);       
    }
    const updateauthor = async (e) => {
        e.preventDefault();     
        const formData = new FormData();        
        formData.append('name', name);
        formData.append('author_image', author_image);

        const res = await fetch(`https://blogv2server.onrender.com/updateauthor/${id}`, {           
            method: "PUT",
            body: formData
        });
        const data = await res.json();
        console.log("value=", data);
        if (res.status === 400 || !data) {
            window.alert("Author Not Updated");
        } else {
            history('/showauthor');
            console.log("edit", formData);
        }
    }
  
    return (
        <>
            <div className="wrapper" ref={wrapRef} >
                <div onClick={overlay} id="overlay" ></div>
                <Sidebar />
                <div className="content">
                    <TopNavbar showsidebar={showsidebar} />
                    <main className="bg-opacity-25 min-vh-100" style={{ background: '#e2e2e2e3' }}>
                        <div className="container-fluid p-3 p-md-4">

                            <div className="card rounded">
                                <div className="card-body">
                                    <form method='POST' encType='multipart/form-data'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Update Author</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>

                                        <hr />
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} />
                                            </div>
                                        </div>                                        
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Upload Files</label>
                                            <div className="col-sm-9">
                                                <input type="file" defaultValue={author_image} className="form-control" onChange={(e) => setauthor_image(e.target.files[0])} />
                                                <iframe src={`http://localhost:5000/${author_image.slice(14)}`} width="100%" height="150px" />        
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" value='Update Law' onClick={updateauthor} className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="bg-light shadow text-secondary text-center d-flex flex-column flex-md-row justify-content-between p-3 p-md-4">
                        <div>Copyright &copy; 2022 <a href="#">DCodeMania</a></div>
                        <div>Made with ❤️ in India</div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default EditAuthor
