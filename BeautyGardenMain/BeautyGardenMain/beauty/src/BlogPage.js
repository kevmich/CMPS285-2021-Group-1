import React from "react";
import axios from 'axios';
import {useState, useEffect } from 'react';
import "./Blog.css";




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
    <div className="blog_page">
        
       {
            data.map && data.map((item, idx) => {
                return (
                    <>
            <div className='post' key={item.blogID}>
            <h1 className="title_style">{ item.blogTitle }</h1>
            <img src={item.imageSrc} className="post_img" />
            
            <p>Posted On: { item.blogDate }</p>
            <p className="post_body"> {item.blogBody}</p>
            
             </div>   
             <hr />
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