import React, { useEffect, useRef, useState } from 'react'
import BlogTitleContainer from './BlogTitleContainer'
const ScrollCategory = () => {
  // const[post,setpost]= useState([]);
  const[post_auth,setpost_auth]= useState([]);
  const[filterdata,setfilterdata]= useState([]);
  const elementRef = useRef(null);
  const fun1 =(e)=>{
    elementRef.current.scrollLeft += 20;
  }  
  useEffect(() => {
    // allpost();
    showpost_auth();
},[])

const showpost_auth = async () => {
  const res = await fetch('https://blogv2server.onrender.com/showpost_auth', {
      method: 'GET',
  })
  const result = await res.json();
  if (result === 500 || !result) {
      window.alert("data not added");
  } else {
      console.log('ok');
      setpost_auth(result.data);
      console.log(result);
  }
}

const filtercategory = [...new Set(post_auth.map((fildata)=>{
  return fildata.category
}))]

console.log('filter=',filtercategory);

const filterItem = (catItem)=>{  
  const updatedItems =post_auth.filter((curElem)=>{
        return curElem.category === catItem       
  })  
  setfilterdata(updatedItems);
  console.log('filterdata',filterdata);
}


  return (
    <>             
      <div className='scroll_category'>
        <div className='scrollabsbuttonbox'>
        <div>     
        </div>  
        <ul class="nav nav-pills" id="pills-tab " role="tablist" ref={elementRef}>           
          {
            filtercategory.map((filtdata,index)=>{
              return(
                <>              
          <li class="nav-item" role="presentation">
            <button class={`nav-link ${index===0?' active':''}`} id={filtdata} data-bs-toggle="pill" 
            data-bs-target="#pills-home" type="button" role="tab" aria-controls={`pills-home${filtdata}`} 
            aria-selected="true" onClick={()=>filterItem(filtdata)}>{filtdata}</button>
          </li>                 
          </>
              )
            })
          }
        </ul>
        <span className='scrollabsbutton' onClick={()=> fun1() }> <i class="fa fa-chevron-right"></i> </span>
        </div>
        
        <div class="tab-content" id="pills-tabContent">
            {
              filterdata.map((blogs)=>{
                return(
                  <>
          <div class="tab-pane fade active show" id={`pills-home${blogs.category}`} role="tabpanel" aria-labelledby={blogs.category}>
              <BlogTitleContainer blogs={blogs} />          
              </div>
              </>
                )                
              })}                      
        </div>
      </div>
    </>
  )
}

export default ScrollCategory
