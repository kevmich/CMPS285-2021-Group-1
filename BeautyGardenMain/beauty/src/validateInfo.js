export default function validateInfo(newContact) {
    let errors = {};
    
    if (!newContact.fullName) {
        errors.fullName = "Please enter your name";
    }
    
    if (!newContact.email) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(newContact.email)) {
        errors.email = "Please enter a valid email";
    }
    return errors;
}