import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Web from './component/Web';
import { Routes,Route } from 'react-router-dom';
import { SingleBlog } from './component/SingleBlog';
import Dashboard from './component/Dashboard/Dashboard';
import Privateroute from './component/Privateroute';
import Adminlogin from './component/Dashboard/Adminlogin';
import AddPost from './component/Dashboard/Post/AddPost';
import ShowPost from './component/Dashboard/Post/ShowPost';
import EditPost from './component/Dashboard/Post/EditPost';

import AddAuthor from './component/Dashboard/Author/AddAuthor';
import ShowAuthor from './component/Dashboard/Author/ShowAuthor';
import EditAudthor from './component/Dashboard/Author/EditAuthor';
import ScrollCategory from './component/ScrollCategory';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Web/>}></Route>
      <Route path='/blog' element={<ScrollCategory/>}></Route>
      <Route path='/blog/:id' element={<SingleBlog/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      {/* admin */}
      <Route path='/'element={<Privateroute/>}>
      <Route path='/dashboard' element={<Dashboard/>}></Route>      
      <Route path='addpost' element={<AddPost/>}></Route>
      <Route path='showpost' element={<ShowPost/>}></Route>      
      <Route path='editpost/:id' element={<EditPost/>}></Route>      
   
      <Route path='addauthor' element={<AddAuthor/>}></Route>      
      <Route path='showauthor' element={<ShowAuthor/>}></Route>      
      <Route path='editauthor/:id' element={<EditAudthor/>}></Route>      
      </Route>

    </Routes>      
    </>
  );
}

export default App;
