import {createContext, useContext, useEffect, useReducer } from 'react';
import reducer from "../reducer/postReducer";
const AppContext = createContext()

const API = 'https://blogv2server.onrender.com/showpost_auth';
const initialState = {
    isLoading:false,
    isError:false,
    posts:[],
};
const AppProvider = ({children}) =>{
    
    const [state,dispatch] =  useReducer(reducer,initialState)
    useEffect(()=>{
    const getPost =async (url)=>{
        dispatch({type:'SET_LOADING'});
        const res = await fetch(url, {
            method: 'GET',
          })
          try {
            const result = await res.json();
            const post = result.data;
            dispatch({type:'SET_API_DATA',payload:post})
          } catch (error) {
            dispatch({type:'API_ERROR'})
          }
        }
        getPost(API);
    },[]);
    return <AppContext.Provider value={{... state}}>{children}
    </AppContext.Provider>
};

const usePostContext = ()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,usePostContext};
