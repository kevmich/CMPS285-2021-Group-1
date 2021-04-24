import { useState } from 'react';

import axios from 'axios';

const loginForm  = () => {
    const initialState = { userName: '', password: ''};
    const [login, setNewLogin] = useState(initialState);
    const [isLoading, setLoading] = useState(false);


    const handleChange = e => {

        const { name , value } = e.target;

        setNewLogin({...login, [name]: value });

    }//end handleChange

    const validate = () => {
        let userNameError = '';
        let passwordError = '';
        let userName = loginForm.userName;
        let password = loginForm.password;

        if(!login.userName) {
            userNameError = "Please fill in this field.";
        }   
        if(!login.password) {
            passwordError = "Please fill in this field";
        }   else if(login.password.length < 6) {
            passwordError = "Password must be atleast 6 characters.";
        }
        
        if (userNameError || passwordError) {
            
            setNewLogin({userName,password,userNameError,passwordError});
            
            return false;
        }

        return true;
    };//end validate






    const handleSubmit = e => {
        e.preventDefault();

        const isValid = validate();
        if (isValid){
            setLoading(true);
            axios.post('/api/auth/login', login)
            .then(function (response) {
                 console.log(response)
            if (response !=null) {
                alert("Logged in succesfully!");
                setNewLogin(initialState);
                setLoading(false);
                }  
        })
        .catch(function (error) {
            console.log(error)
            
        })   
        
        }
    
    }//end handleSubmit




    return { handleChange, login, handleSubmit, isLoading };


};//end const useForm

export default loginForm;