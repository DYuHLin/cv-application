import React, {useState} from 'react';
import Experience from './Experience';

const Education = (props) => {
    const educationFields = {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        num: 1
        };

    const [educations, setEducation] = useState(educationFields);

    const handleChange = (e) => {
        setEducation({
            ...educations,[e.target.id]: e.target.value,           
        });
    };

    // incExp = (e) => {
    //     e.preventDefault(e);
            // educations: {
            //     num: this.state.educations.num + 1,
            // }      
    // };
    
        // console.log(this.state.educations.num);
    return(
        <>
            <fieldset id='educational'>
                <legend>Education</legend>
                    <fieldset>
                        <label for = 'school'>School: </label>
                        <input onChange={handleChange} value = {educations.school} id='school' type = 'text'></input>

                        <label for = 'field'>Degree: </label>
                        <input onChange={handleChange} value = {educationFields.degree}  id='degree' type = 'text'></input>

                        <label for = 'sdate'>Start Date: </label>
                        <input onChange={handleChange} value = {educationFields.start}  id='startDate' type = 'text' placeholder='Year'></input>

                        <label for = 'edate'>End Date: </label>
                        <input onChange={handleChange} value = {educationFields.end} id='endDate' type = 'text' placeholder='Year'></input>
                    </fieldset>
                    {/* <button onClick={this.incExp} className="add-btn">Add</button> */}
              </fieldset>
               <Experience 
              general = {props.general} 
              educations = {educations} 
              /> 
            </>
        );
    
};

export default Education;