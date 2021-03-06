import { useState } from 'react';

import axios from 'axios';


const useForm = () => { 
    const initialState = { fullName: '', phoneNumber: '', email: '', comment: '', nameError: '', phoneError: '', emailError: '', commentError: ''};
    
    const [newContact, setNewContact] = useState(initialState);

    const [isLoading, setLoading] = useState(false);
    
   
    const handleChange = e => {
        
        const { name, value } = e.target;
       
        setNewContact({...newContact, [name]: value});
        
        
        
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

        const formatPhoneNumber = () => {
            var cleaned = ('' + newContact.phoneNumber).replace(/\D/g, '');
            var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
              return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            return null;
          }

       
        
       
        if(!newContact.fullName) {
            nameError = "*";
            
            } else if (!/^[a-zA-Z ]+$/.test(newContact.fullName)){
                nameError = "* Enter a valid name";
            }

        if(!newContact.phoneNumber) {
            phoneError = "*";
            
        }  else if (!/^[0-9\b]+$/.test(newContact.phoneNumber)){
            phoneError = "* Enter a valid phone number";
        
        }   else if (newContact.phoneNumber.length < 10){
            phoneError = "* Include area code";
        }  
        
        
        if(!newContact.email) {
            emailError = "*";
        }  else if (!/\S+@\S+\.\S+/.test(newContact.email)){
            emailError = '* Enter a valid email';
        } 

        if(!newContact.comment) {
            commentError = "*";
        }
       
        if (nameError || phoneError || emailError || commentError) {
           
            setNewContact({fullName, phoneNumber, email, comment, nameError, phoneError, emailError, commentError});
            
            return false;
        }
       
        newContact.phoneNumber = formatPhoneNumber(newContact.phoneNumber);
        
        return true;

    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const isValid = validate();
        if (isValid){
            setLoading(true);
            axios.post('/api/UserContact', newContact)
            .then(function (response) {
                 console.log(response)
            if (response !=null) {
                alert("Contact information submitted successfully.");
                setNewContact(initialState);
                setLoading(false);
                }  
        })
        .catch(function (error) {
            console.log(error)
            
        })
        
    }       
    
    }


    return { handleChange, newContact, handleSubmit, isLoading };

    
};

export default useForm;