
import React, { useState, useRef, useMemo, useEffect } from 'react';
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowPost = () => {
    const wrapRef = React.useRef(null);
    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }

    const [post, setpost] = useState([]);
    useEffect(() => {
        getpost();
    }, [])

    const getpost = () => {
        fetch('http://localhost:5000/showpost', {
            method: 'GET',
        }).then((getpost) => getpost.json()).then((data) => {
            setpost(data.data);
        })
    }

    const deletepost = async (_id) => {
        const res = await fetch(`http://localhost:5000/deletepost/${_id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log("value=", data);
        toast.error('Post Deleted Sucessfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        getpost();
    }

    const columns = [
        {
            name: "Post Title",
            selector: (row) => row.post_title,
        },    
        {
            name: "Post Paragraph",
            selector: (row) => row.post_para,
        }, 
        {
            name: "Post category",
            selector: (row) => row.category,
        }, 
        {
            name: "Post Image",
            selector: (row) => <>
                <iframe src={`http://localhost:5000/${row.image.slice(14)}`} width="100%" height="150px" />                                               
            </>
        },
        {
            name: 'Action',
            cell: row => <><Link className='btn btn-primary' to={"/editpost/" + row._id}>Edit
            </Link> &nbsp; &nbsp; &nbsp;
                <Link className='btn btn-danger' onClick={() => deletepost(row._id)}>Delete</Link></>
        }
    ];
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
                                    <form method='POST'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">View Post</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />
                                        <div className="mb-3 row">
                                            <div className="col-sm-12">
                                                <DataTable columns={columns}
                                                    data={post}
                                                    pagination
                                                    responsive
                                                    fixedHeader
                                                    fixedHeaderScrollHeight="500px"
                                                    highlightOnHover
                                                ></DataTable>
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

export default ShowPost