import React from "react";
import axios from 'axios';
import {useState, useEffect } from 'react';



function BlogPage(props) {
    const [data, setData] = useState({});

    useEffect (() => {
        const GetData = async () => {
            const result = await axios("/api/BlogPosts");
            setData(result.data);
        };

        GetData();
    }, []);


return (
    <div>
       {
            data.map && data.map((item, idx) => {
                return (
                    <>
            <div className='post' key={item.blogID}>
            <img src={item.imageSrc} className="post_img" />
            <h2 className="QuoteCurs1">{ item.blogTitle }</h2>
            <p>Posted On: { item.blogDate }</p>
            <p> {item.blogBody}</p>
             </div>   
       
                </>
            
                )
})}
    </div>
            
   /* <div className="blog-details">
     {
     data.map && data.map((item, idx) => {
         return <>
         
        <article>
          <h2 className="QuoteCurs1">{ item.blogTitle }</h2>
          <p>Posted On: { item.blogDate }</p>
          <div dangerouslySetInnerHTML={{ __html: item.blogBody }}></div>
          <hr />
        </article>
        </>
     }).reverse()}
      
    </div>
  );*/
)
    }   
      
export default BlogPage;