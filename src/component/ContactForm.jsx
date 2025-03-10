import { useState } from "react"


export default function ContactForm({name, setName, phone, setPhone, email, setEmail, handleSubmit, editMode}){

const [errors, setErrors] = useState({});

const validateForm = ()=>{
    let newErrors = {};
        if (!name.trim()){
            newErrors.name = "Enter a valid name"
        }
        if (!phone.trim())
            newErrors.phone = "Please enter a valid phone number"  
}




    return<>
    
    </>
}