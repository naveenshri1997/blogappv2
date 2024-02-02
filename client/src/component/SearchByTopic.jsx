import React, { useEffect, useRef, useState } from 'react'
import { useFilterContext } from '../context/filtercontext';
export const SearchByTopic = () => {

const {isLoading, filter_posts,all_posts} = useFilterContext();
const {filters:{category},updateFilterValue} = useFilterContext();

const getUniqueData =(data,property) =>{
  let newVal = data.map((curElem)=>{
      return curElem[property];
  })
  return (newVal = ['Trending',...new Set(newVal)]);
  console.log(newVal);
}
const categoryonlydata = getUniqueData(all_posts,"category");

//   const[post_auth,setpost_auth]= useState([]);
//   const[filterdata,setfilterdata]= useState([]);
//   useEffect(() => {
//     // allpost();
//     showpost_auth();
    
// },[])

// const showpost_auth = async () => {
//   const res = await fetch('http://localhost:5000/showpost_auth', {
//       method: 'GET',
//   })
//   const result = await res.json();
//   if (result === 500 || !result) {
//       window.alert("data not added");
//   } else {
//       console.log('ok');
//       setpost_auth(result.data);
//       console.log(result);
//   }
// }

// const filtercategory = [...new Set(post_auth.map((fildata)=>{
//   return fildata.category
// }))]

// console.log('filter=',filtercategory);

// const filterItem = (catItem)=>{  
   
//   const updatedItems =post_auth.filter((curElem)=>{
//         return curElem.category === catItem       
//   })  
//   setfilterdata(updatedItems);
//   console.log('filterdata',filterdata);
// }

  return (
    <>
        <div className='topic_search'>
            <h3 className='title'>Recomended Topics</h3>
            <div className="bt">
            {
                   categoryonlydata.map((curElem,index)=>{
                          return(
                            <>     
                        <button class="rounded-pill cus_bg2 fw-normal badge text-dark px-4 py-2 mx-1 my-1 fw-normal" 
                         key={index} name='category' value={curElem} onClick={updateFilterValue}>
                          {curElem}</button>                        
                                  </>
                                      )
                                    })
                                  }
                    </div>
        </div>
    </>
  )
}
