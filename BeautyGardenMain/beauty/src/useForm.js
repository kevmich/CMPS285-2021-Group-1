import { useState, useEffect } from 'react';

import axios from 'axios';


const useForm = validate => { 
    const [newContact, setNewContact] = useState(
        { fullName: '', phoneNumber: '', email: '', comment: ''}
    );
    const [errors, setErrors] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setNewContact({...newContact, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(newContact));
        axios.post('https://localhost:44381/api/UserContact', newContact)
        .then(function (response) {
            console.log(response)
            if (response !=null) {
                alert("Contact information submitted successfully.");
            }  
        })
        .catch(function (error) {
            console.log(error)
        })
    
    }


    return { handleChange, newContact, handleSubmit, errors };

    
};

export default useForm;