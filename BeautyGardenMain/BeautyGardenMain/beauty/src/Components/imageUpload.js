import React, { useState } from "react";
import "./imageUpload.css";

function imageUpload() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
  
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'TheBeautyGarden')
      setLoading(true)
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/the-beauty-garden-northshore/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
  
      setImage(file.secure_url)
      setLoading(false)
    }
  
    return (
      <div className="imageUpload">
        <h1>Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: '300px' }} />
        )}
      </div>
    )
  }
  
  export default imageUpload;