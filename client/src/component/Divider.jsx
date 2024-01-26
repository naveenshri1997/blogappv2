import React from 'react'
import ScrollCategory from './ScrollCategory'
import { SearchByTopic } from './common/SearchByTopic'
import RelatedBlog from './RelatedBlog'

const Divider = () => {
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