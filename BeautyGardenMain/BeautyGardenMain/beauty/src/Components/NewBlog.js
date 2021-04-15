import React from "react";
import {useState} from "react";
import axios from "axios";
import '../Blog.css';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from '@ckeditor/ckeditor5-react'

const NewBlog = () => {

const initialState = { blogTitle: '', blogDate: '', blogBody: '', imageName: '' };
const [blogPost, setBlogPost ] = useState(initialState); 

const getDateTime = () => {
  
  let tempDate = new Date();
  let date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' +  tempDate.getFullYear(); 
  const currDate = date;
  setBlogPost({ blogDate: currDate, blogTitle: blogPost.blogTitle, blogBody: blogPost.blogBody})
}

const handleChange = e => {
        const { name, value } = e.target;
        setBlogPost({...blogPost, [name]: value});
}

const handleCKEditorState = (event, editor) =>{
  const data = editor.getData();
  blogPost.blogBody = data
 
  //console.log(data);
}

        const handleSubmit = e => {
          
            e.preventDefault();
            axios.post('/api/BlogPosts', blogPost)
                .then(function (response) {
                     console.log(response)
                if (response !=null) {
                    alert("Post submitted successfully.");
                    setBlogPost(initialState);
                    
                    }  
            })
            .catch(function (error) {
                console.log(error)
                
            })
            
        }       
   
    return(
            <div className="create">
              <h2>Add a New Post</h2>
              <form onSubmit={handleSubmit}>
               <div className="input_container">
                <label>Blog title:</label>
                <input 
                  type="text" 
                  name="blogTitle"
                  required
                  value={blogPost.blogTitle}
                  onChange={handleChange}
                />
                <label>Today's Date:</label>
                
                <input 
                  type="text" 
                  name="blogDate"
                  required 
                  value={blogPost.blogDate}
                  onChange={handleChange}
                  />
                  <button type="button" onClick={getDateTime}>Get Time</button>
                </div>
                <div className="CKcontainer">
                <label>Blog body:</label>
                <CKEditor
                name="blogBody"
                config={{
                  toolbar: ['bold', 'heading']
                }}
                editor={ ClassicEditor } 
                onInit={ editor=>{

                }}
                value={blogPost.blogBody}
                onChange={handleCKEditorState}
                 
                 />
                </div>
                <button type="submit">Add Blog</button>
                
              </form>
            </div>
          );
        
}

    
export default NewBlog;