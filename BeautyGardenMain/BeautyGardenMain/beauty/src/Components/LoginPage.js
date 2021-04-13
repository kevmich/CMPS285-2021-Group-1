import React, { useState } from 'react';
import './LoginPage.css';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from 'axios';

const Schema = yup.object().shape({
    userName: yup
    .string()
    .required()
    .min(3),

    password: yup
    .string()
    .required()
    .min(6),
});



    function LoginPage() {
      const{handleSubmit, register, setError} = useForm({validationSchema: Schema});

        function onSubmit(formData) {
                console.log(formData);
        }

        console.log(setError)

    

        return (
            
            <div className="container" >
                <form className='white' onSubmit={handleSubmit(onSubmit)}>
                    <body>                 
                
                      <div className="input-field">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name="userName" placeholder="example@yahoo.com" {...register('userName')} />
                           {setError.userName && <p>{setError.userName.message}</p>}
                         </div>   

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder ="Please enter your password"{...register('password')}
                                styles={{width:"300px"}} />
                            {setError.password && <p>{setError.password.message}</p>}
                            </div>

                        <div>
                            <button className="btn blue darken-3" type="submit">Submit</button>
                        </div>
                    </body>  
                </form>
            </div>
        );
    }
export default LoginPage;