import React, {useState} from 'react';
import Experience from './Experience';
import uniqid from 'uniqid';

const Education = (props) => {
    const educationFields = [];

    const [educations, setEducation] = useState(educationFields);

     const incExp = (e) => {
        e.preventDefault();
        let num = 0;
        let obj = {
            id: uniqid(),
            school: '',
            startDate: '',
            endDate: '',
            degree: '',
        };

        num += 1;

             setEducation(
                current => [...current, obj]
             );
             
        obj = {
            id: uniqid(),
            school: '',
            startDate: '',
            endDate: '',
            degree: '',
        };
     };

     const updateEdu = (index) => (e) => {
        const newArr = educations.map((obj, i) => {
            if(index === i){
                return{...obj, [e.target.name]: e.target.value}
            } else {
                return obj;
            };
            
        });
    
        setEducation(newArr);
     };
    
        console.log(educations);
    return(
        <>
            <fieldset id='educational'>
                <legend>Education</legend>
                <div className='fields'>
                    {educations.map((obj ,index) => {
                        return(
                        <fieldset key={obj.id} id={obj.id}>
                            <label for = 'school'>School: </label>
                            <input onChange={updateEdu(index)} value = {obj.school} name='school' type = 'text'></input>

                            <label for = 'field'>Degree: </label>
                            <input onChange={updateEdu(index)} value = {obj.degree}  name='degree' type = 'text'></input>

                            <label for = 'sdate'>Start Date: </label>
                            <input onChange={updateEdu(index)} value = {obj.start}  name='startDate' type = 'text' placeholder='Year'></input>

                            <label for = 'edate'>End Date: </label>
                            <input onChange={updateEdu(index)} value = {obj.end} name='endDate' type = 'text' placeholder='Year'></input>
                            <button className="del-btn">Delete</button>
                    </fieldset>
                        )
                    })}
                </div>
                    
                    <button onClick={incExp} className="add-btn">Add</button> 
              </fieldset>
               <Experience 
              general = {props.general} 
              educations = {educations} 
              /> 
            </>
        );
    
};

export default Education;