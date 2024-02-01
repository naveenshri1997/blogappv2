import { createContext, useContext, useEffect, useReducer } from "react";
import {usePostContext} from "./postcontext";
import reducer from "../reducer/filterReducer"
const FilterContext = createContext();

const  initialState ={
    filter_posts:[],
    all_posts:[],
    filters:{
        text:"",
        category:'all',
    }
};
export const FilterContextProvider = ({children})=>{
    const {posts} =  usePostContext();
    console.log(posts);
    const [state,dispatch]=  useReducer(reducer,initialState);

    // updateFilterValue
    const updateFilterValue =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
    };

    useEffect(()=>{
        dispatch({type:"FILTER_POSTS"})
    },[posts,state.filters])

    useEffect(() =>{
        dispatch({type:"LOAD_FILTER_POST",payload:posts});
    },[posts])
    return <FilterContext.Provider value={{...state,updateFilterValue}}>
    {children}
    </FilterContext.Provider>
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}