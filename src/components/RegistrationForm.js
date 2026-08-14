import React, { useState} from 'react';

function RegistrationForm(){

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Here you can add logic to send the form data to a server or API
    };

    return(
        <form onSubmit={handleSubmit} style={{border: '1px solid #ccc', padding: '20px', margin: '20px'}}>
            <h2>Registration Form</h2>
            <input name ="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input name ="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            <input name ="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );


}

export default RegistrationForm;