import React, { useState } from 'react'
import logo from '../bloglogo.png';
import { useFilterContext } from '../context/filtercontext';
const Header = () => {
    const {filters:{text},updateFilterValue} = useFilterContext();
  console.log('filtervalue is =====0',text);

  // const [input,setinput] = useState('');
  // const fetchdata =  (value) => {
  //  fetch('http://localhost:5000/showpost_auth')
  //   .then((response)=> response.json())
  //   .then((json)=>{
  //     const result = json.data.filter((item)=>{
  //       if (input === "") {
  //         //if query is empty
  //         return item;
  //       } else if (item.post_para.toLowerCase().includes(input.toLowerCase())) {
  //         //returns filtered array
  //         return item;
  //       }
  //     })
  //     console.log('jsonn=',result);
  //   })
  //   }
  // const handlechange =(value)=>{
  //   setinput(value);
  //   fetchdata(value);
  // }
  return (
    <>
    <nav class="cus-navbar navbar navbar-expand-lg navbar-light">
  <div class="container-fluid justify-content-start">
    <a class="navbar-brand" href="#"><img width="30px" src={logo} /></a>
    
    <div>      
      <form class="d-flex" onSubmit={(e)=> e.preventDefault()}>
        <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"
        name="text" value={text} onChange={updateFilterValue}/>       
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header