import React, {useState, useEffect} from 'react';
import Post from './Post';
import axios from 'axios';
import "../Blog.css"

export default function BlogList(props) {
    const [data, setData] = useState({});
    const [postEdit, setPostEdit] = useState(null)


  
    
    useEffect(() => {
        
            const GetData = async () => {
                const result = await axios("/api/BlogPosts");
                setData(result.data);
            };
    
            GetData();
        }, []);

   

    const blogAPI = (url = '/api/BlogPosts/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

   
    const showPostDetails = data => {
        setPostEdit(data)
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('blogID') == "0")
            blogAPI().create(formData)
                .then(res => {
                    onSuccess();
                   refreshPostPage();
                })
                .catch(err => console.log(err))
        else
        blogAPI().update(formData.get('blogID'), formData)
        .then(res => {
            onSuccess();
            refreshPostPage();
            
            
        })
        .catch(err => console.log(err))

    }

            
    const deletePost = (id) => {
        if (window.confirm('Delete?'))
        axios.delete("/api/BlogPosts/"+ id)
        .then(response => {
            if (response.data !=null) {
                alert("Post deleted successfully.");
                refreshPostPage();
            }
            
        });
        
    };
   
    function refreshPostPage() {
        blogAPI().fetchAll()
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }

    
    return (
        <div className="row">
            <div className="col-md-12">
               
            </div>
            <div className="col-md-4">
                <Post 
                addOrEdit={addOrEdit}
                recordForEdit={postEdit}
                />
            </div>
            <div className="col-md-8">
                <div className="lead text-center">Blog Page</div>
                {
                
                data.map && data.map((item, idx) => {
                    return (
                        <>
                         <div key={item.id}>
                             <hr />
                             
          <button className="btn btn-dark" onClick={deletePost.bind(this, item.blogID)}>Delete</button>
          
          <button className="btn btn-dark" onClick={() => { showPostDetails(item) }}>Edit</button>
        </div>
          
                <div className='post' key={item.blogID}>
                
                <h1 className="title_style">{ item.blogTitle }</h1>
                <img src={item.imageSrc} className="post_img" />
                
                <p className="post_date">Posted On: { item.blogDate }</p>
                <pre className="SmallFont"><p className="post_body"> {item.blogBody}</p></pre>
                </div>
          
          <hr />
        
        </>)}).reverse()}
          
    </div>
    </div>
        
        
    )
    
}
