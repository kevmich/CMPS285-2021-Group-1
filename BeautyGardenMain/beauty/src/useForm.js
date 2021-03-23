import { useState } from 'react';

import axios from 'axios';


const useForm = () => { 
    const initialState = { fullName: '', phoneNumber: '', email: '', comment: '', nameError: '', phoneError: '', emailError: '', commentError: ''};
    
    const [newContact, setNewContact] = useState(initialState);
    
   
    
    

    const handleChange = e => {
        
        const { name, value } = e.target;
        setNewContact({...newContact, [name]: value});
        console.log(newContact);
        
    }

    const validate = () => {
        let nameError = '';
        let phoneError = '';
        let emailError = '';
        let commentError = '';
        let fullName = newContact.fullName;
        let phoneNumber = newContact.phoneNumber;
        let email = newContact.email;
        let comment = newContact.comment;

        if(!newContact.fullName) {
            nameError = "Please fill in this field.";
            
            }

        if(!newContact.phoneNumber) {
            phoneError = "Please fill in this field.";
            
        }  else if (newContact.phoneNumber.length < 10){
            phoneError = "Please enter your full number, inlcuding the area code";
        }  else if (!/^[0-9\b]+$/.test(newContact.phoneNumber)){
            phoneError = "Please only input numbers.";
        }  
        
        if(!newContact.email) {
            emailError = "Please fill in this field.";
        }  else if (!/\S+@\S+\.\S+/.test(newContact.email)){
            emailError = 'Please enter a valid email';
        } 

        if(!newContact.comment) {
            commentError = "Please fill in this field.";
        }  
       
        if (nameError || phoneError || emailError || commentError) {
           
            setNewContact({fullName, phoneNumber, email, comment, nameError, phoneError, emailError, commentError});
            
            return false;
        }

        return true;

    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const isValid = validate();
        if (isValid){
            axios.post('https://localhost:44381/api/UserContact', newContact)
            .then(function (response) {
                 console.log(response)
            if (response !=null) {
                alert("Contact information submitted successfully.");
                setNewContact(initialState);
                }  
        })
        .catch(function (error) {
            console.log(error)
            
        })
        
    }       
    
    }


    return { handleChange, newContact, handleSubmit };

    
};

export default useForm;