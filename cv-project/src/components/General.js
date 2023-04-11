import React, {useState} from 'react';
import Education from './Education';

const General = () => {
    const generalItems = {
        name: "",
        role: "",
        number: "",
        address: "",
        mail: "",
        description: ""
        };

    const [general, setGeneral] = useState(generalItems);

    const handleChange = (e) => {
        setGeneral({
            ...general, [e.target.id]: e.target.value         
        });
    };


        return(
        <>
            <fieldset>
                <legend>Personal Information</legend>
                <label for = 'name'>Name and Surname: </label>
                <input onChange={handleChange} value = {general.name}  id='name' type = 'text' required/>

                <label for = 'title'>Title: </label>
                <input onChange={handleChange} value = {general.role}  id='role' type = 'text' required/>

                <label for = 'number'>number: </label>
                <input onChange={handleChange} value = {general.number}  id='number' type = 'text' required/>

                <label for = 'mail'>Email: </label>
                <input onChange={handleChange} value = {general.mail}  id='mail' type = 'email' required/>

                <label for = 'address'>Address: </label>
                <input onChange={handleChange} value = {general.address}  id='address' type = 'text' required/>
                
                <label for = 'desc'>Description: </label>
                <textarea onChange={handleChange} value = {general.description} id='description' required/>
            </fieldset>
            <Education 
            general = {general} 
            /> 
        </>
    );
};

export default General;