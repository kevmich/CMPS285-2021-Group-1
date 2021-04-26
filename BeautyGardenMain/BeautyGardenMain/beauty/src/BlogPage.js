import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
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
            <p className="post_date">Posted On: { item.blogDate }</p>
            <pre><p className="post_body SmallFont" > {item.blogBody}</p></pre>
            </div>
             <hr />
                </>
            
                )
}).reverse()}
    </div>
            
  
)
    }   
      
export default BlogPage;