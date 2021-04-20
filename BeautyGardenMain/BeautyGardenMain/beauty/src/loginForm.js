import { useState } from 'react';

import axios from 'axios';

const loginForm  = () => {
    const initialState = { userName: '', password: ''};
    const login = { userName:'admin', password:'Password123!'};
    const isLoading = false;
    //const [login, setNewLogin] = useState(initialState);

    //const [isLoading, setLoading] = useState(false);


    const handleChange = e => {

        const { name , value } = e.target;

        //setNewLogin({...login, [name]: value });

    }//end handleChange


    const handleSubmit = e => {
        e.preventDefault();
        
            //setLoading(true);
            axios.post('/api/auth/login', login)
            .then(function (response) {
                 console.log(response)
            if (response !=null) {
                alert("Logged in succesfully!");
                //setNewLogin(initialState);
                //setLoading(false);
                }  
        })
        .catch(function (error) {
            console.log(error)
            
        })       
    
    }//end handleSubmit




    return { handleChange, login, handleSubmit, isLoading };


};//end const useForm

export default loginForm;