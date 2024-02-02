import React, { useEffect, useRef, useState } from 'react'
import BlogTitleContainer from './BlogTitleContainer'
import { useFilterContext } from '../context/filtercontext';
const ScrollCategory = () => {
  
const {isLoading, filter_posts,all_posts} = useFilterContext();
const {filters:{category},updateFilterValue} = useFilterContext();
console.log('posts are here== ',filter_posts);
  // console.log('filtervalue is =====0',text);
  const [filterdata, setfilterdata] = useState([]);
  const [post_auth, setpost_auth] = useState([]);
  const elementRef = useRef(null);

  if(isLoading){
    return <div> ... Loading </div>;
  }
  const fun1 = (e) => {
    elementRef.current.scrollLeft += 20;
  }
  const getUniqueData =(data,property) =>{
    let newVal = data.map((curElem)=>{
        return curElem[property];
    })
    return (newVal = ['Trending',...new Set(newVal)]);
    console.log(newVal);
  }
  const categoryonlydata = getUniqueData(all_posts,"category");
  // useEffect(() => {
  //   filterItem();
  //   showpost_auth();
  // }, [])

  // const showpost_auth = async () => {
  //   const res = await fetch('http://localhost:5000/showpost_auth', {
  //     method: 'GET',
  //   })
  //   const result = await res.json();
  //   if (result === 500 || !result) {
  //     window.alert("data not added");
  //   } else {
  //     console.log('ok');
  //     setpost_auth(result.data);
  //     console.log(result);
  //   }
  // }


  // const filtercategory = [...new Set(all_posts.map((fildata) => {
  //   return fildata.category
  // }))]

  // console.log('filter=', filtercategory);

  // const filterItem = (catItem) => {
  //   if (catItem ==='All') {
  //     setfilterdata(post_auth);
  //   }
  //   // console.log('catitem', catItem);
  //   const updatedItems = filter_posts.filter((curElem) => {
  //     return curElem.category === catItem
  //   })
  //   setfilterdata(updatedItems);
  //   // console.log('filterdata', filterdata);
  // }

  // const [input,setinput] = useState('');

  //   const fetchdata =  (value) => {
  //    fetch('http://localhost:5000/showpost_auth')
  //     .then((response)=> response.json())
  //     .then((json)=>{
  //       const result = json.data.filter((item)=>{
  //         if (input === "java") {
  //           //if query is empty
  //           return item;
  //         } else if (item.post_para.toLowerCase().includes(input.toLowerCase())) {
  //           //returns filtered array
  //           return item;
  //         }
  //       })
  //       console.log('jsonn=',result);
  //     })
  //     }
  //   const handlechange =(value)=>{
  //     setinput(value);
  //     fetchdata(value);
  //   }

  return (
    <>
      <div className='scroll_category'>
        <div className='scrollabsbuttonbox'>
          <div>
          </div>
          <ul class="nav nav-pills" id="pills-tab " role="tablist" ref={elementRef}>
            {
              categoryonlydata.map((curElem,index) => {
                return (
                  <>
                   
                    <li class="nav-item" role="presentation">
                      <button class={`nav-link ${index === 0 ? ' active' : ''}`}  data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" key={index} name='category' value={curElem}
                        aria-selected="true" onClick={updateFilterValue}>{curElem}</button>
                    </li>
                  </>
                )
              })
            }
          </ul>

          <span className='scrollabsbutton' onClick={() => fun1()}> <i class="fa fa-chevron-right"></i> </span>
        </div>

        {/* <div class="tab-content" id="pills-tabContent">
          {
            filterdata.map((blogs) => {
              return (
                <>
                  <div class="tab-pane fade active show" id={`pills-home${blogs.category}`} role="tabpanel" aria-labelledby={blogs.category}>
                    <BlogTitleContainer blogs={blogs} />
                  </div>
                </>
              )
            })}
        </div> */}
        {/* /////////// */}
        {/* <form class="d-flex" onSubmit={(e)=> e.preventDefault()}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        name="text" value={text} onChange={updateFilterValue}/>       
      </form> */}
        {
            filter_posts.map((blogs) => {
              return (
                <>
                    <BlogTitleContainer blogs={blogs} />
                </>
              )
            })}
        {/* /////////// */}
      </div>
    </>
  )
}

export default ScrollCategory
