import React,{useState} from "react";
import { Grid, TextField } from "@material-ui/core";

const ContactForm = (props) => {
    return (
        <form autoComplete="off" noValidate>
            
                  <TextField
                  name="FullName" 
                  variant="outlined"
                  label="Full Name"
                  />
                   <TextField
                  name="PhoneNumber" 
                  variant="outlined"
                  label="Phone Number"
                  />
                   <TextField
                  name="Email" 
                  variant="outlined"
                  label="Email"
                  />
                   <TextField
                  name="Comment" 
                  variant="outlined"
                  label="Comment"
                  />    
                
        </form>
    );
}

export default ContactForm;