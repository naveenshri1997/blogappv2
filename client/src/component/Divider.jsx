import React from 'react'
import ScrollCategory from './ScrollCategory'
import { SearchByTopic } from './SearchByTopic'
import RelatedBlog from './RelatedBlog'
// import { useFilterContext } from '../context/filtercontext'

const Divider = () => {
    // const {filter_posts} = useFilterContext();
    // console.log('filter posts ==',filter_posts);
    return (
        <>
            <section>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-8 border_right allsidepadd">
                            <ScrollCategory />
                        </div>
                        <div className="col-lg-4 allsidepadd2">
                            <SearchByTopic/>    
                            <RelatedBlog />                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Divider