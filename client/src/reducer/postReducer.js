const PostReducer= (state,action)=>{

    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "SET_API_DATA":
            // const postdata = action.payload
            return{
                ...state,
                isLoading:false,
                posts:action.payload,
            }
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
            break;
            default:
                return state;
    }
}
export default PostReducer