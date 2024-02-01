const filterReducer= (state,action)=>{

    switch(action.type){
        case "LOAD_FILTER_POST": 
        return{
            ...state,
            filter_posts:[...action.payload],
            all_posts:[...action.payload],

        }
        case "UPDATE_FILTERS_VALUE":
            const {name,value}= action.payload;
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                }
            }
        case "FILTER_POSTS":
            let {all_posts}= state;
            let tempFilterPost = [...all_posts];
            console.log('tempfilterpost',tempFilterPost);


            const {text,category} = state.filters;
            if(text){
                tempFilterPost = tempFilterPost.filter((curElm)=> 
                { 
                    return curElm.post_para.toLowerCase().includes(text);
                })
            }

            if(category){
                tempFilterPost = tempFilterPost.filter((curElm)=> 
                { 
                    return curElm.category===category;
                })
            }

            return {
                ...state,
                filter_posts:tempFilterPost,
                
            }
        default: {
            return state;
        }
    }

}
export default filterReducer