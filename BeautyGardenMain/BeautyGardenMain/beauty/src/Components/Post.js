import React, {useState, useEffect} from 'react'
import review3 from '../images/review3.png';
import "../Blog.css"
import {Modal, ModalHeader} from 'reactstrap';

const defaultImageSrc = review3

const initialFieldValues = {
    blogID: 0,
    blogTitle: '',
    blogDate: '',
    blogBody: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
   
}
export default function Post(props) {
    const {addOrEdit, recordForEdit, modalClass, toggle, modal} = props
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    
    

    
    
    
    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])
    
    const handleInputChange = e => {
        const {name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const getDateTime = () => {
  
        let tempDate = new Date();
        let date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' +  tempDate.getFullYear(); 
        const currDate = date;
        setValues({ 
            ...values,
            blogDate: currDate
        })
      }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x =>{
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
        setValues({
            ...values,
            imageFile:null,
            imageSrc: defaultImageSrc
        })
    }
}

const validate = () => {
    let temp = {}
    temp.blogTitle = values.blogTitle == "" ? false : true;
    temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
    setErrors(temp)
    return Object.values(temp).every(x => x == true)
}

const resetForm = () => {
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
    setErrors({})
}

const resetModal = () =>{
    toggle();
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
    setErrors({})
}

const handleFormSubmit = e =>{
    e.preventDefault()
    if (validate()){
        const formData = new FormData()
        formData.append('blogID', values.blogID)
        formData.append('blogTitle', values.blogTitle)
        formData.append('blogBody', values.blogBody)
        formData.append('blogDate', values.blogDate)
        formData.append('blogBody', values.blogBody)
        formData.append('imageName', values.imageName)
        formData.append('imageFile', values.imageFile)
        formData.append(0, values.blogLikes)
        addOrEdit(formData, resetForm)
       
    }
}

const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')
   


return (
        <>
        <Modal trapFocus={true} isOpen={modal} toggle={toggle} className={modalClass} backdrop={'static'} >
        <div className="container text-center">
        <ModalHeader toggle={toggle}>Post</ModalHeader>
        </div>
            
        
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
        
            <div className="card">
                
                <img src={values.imageSrc} className="card-img-top" />
                
                <div className="card-body">
                    <div className="form-group">
                        <input type="file" accept="image/*" className={"form-control-file"+applyErrorClass('imageSrc')}
                        onChange={showPreview} id='image-uploader'/>
                         <input className={"form-control" + applyErrorClass('blogTitle')} name="blogTitle" placeholder="Post Title" 
                        value={values.blogTitle} required
                        onChange = {handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Post Date" name="blogDate"
                        value={values.blogDate} 
                        onChange = {handleInputChange}/>
                        <button type="button" class="btn btn-secondary btn-sm btn-dark" onClick={getDateTime}>Today's Date</button>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Post Body" name="blogBody"
                        value={values.blogBody} 
                        onChange = {handleInputChange}/>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-dark">Submit</button>
                        <button type="button" onClick={resetModal} className="btn btn-dark">Cancel</button>
                        
                    </div>
                </div>
            </div>
        </form>
        </Modal>
        

       </>
       
    )
    
}

