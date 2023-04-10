import React, {useState} from 'react';
import Buttons from './Buttons';
import uniqid from 'uniqid';

const Experience = (props) => {

    const jobs = [];
    

    const [experiences, setExperiences] = useState(jobs);

    const handleChange = (e) => {
    setExperiences({
        // ...experiences, jobs: [id].id.target.id = id.target.value,
        ...experiences.jobs, [e.target.id]: e.target.value,
    });

    
};

const incEdu = (e) => {
    let num = 0;
    e.preventDefault();
    let obj = {
        id: uniqid(),
        company: '',
        role: '',
        start: '',
        end: '',
        desc: '',
    };

    num += 1;

    setExperiences(current => [...current, obj]);

    obj = {
        id: uniqid(),
        company: '',
        role: '',
        start: '',
        end: '',
        desc: '',
    };
};

const updateExp = (index) => (e) => {
    const newArr = experiences.map((obj, i) => {
        if(index === i){
            return{...obj, [e.target.name]: e.target.value}
        } else {
            return obj;
        };
        
    });

    setExperiences(newArr);
};
          console.log(experiences);

        return(
            <>
            <fieldset>
                <legend>Experience</legend>
                <div className='fields'>
                    {/* <fieldset key="1">
                        <label for = 'company'>Company: </label>
                        <input onChange={handleChange} value = {experiences.company}  id='company' type = 'text'></input>

                        <label for = 'role'>Role/Title: </label>
                        <input onChange={handleChange} value = {experiences.role}  id='role' type = 'text'></input>

                        <label for = 'sdate'>Start Date: </label>
                        <input onChange={handleChange} value = {experiences.start}  id='start' type = 'text' placeholder='Year'></input>

                        <label for = 'edate'>End Date: </label>
                        <input onChange={handleChange} value = {experiences.end}  id='end' type = 'text' placeholder='Year'></input>

                        <label for = 'exp'>Tasks/Responsibilities: </label>
                        <textarea onChange={handleChange} value = {experiences.desc} id='desc' />
                        
                    </fieldset>  */}
                    {experiences.map((obj, index) => {
                        return (
                            <fieldset key={obj.id} id = {obj.id}>
                                        <label for = 'company'>Company: </label>
                                        <input onChange={updateExp(index)} value={obj.company}  name='company' type = 'text'></input>
                    
                                        <label for = 'role'>Role/Title: </label>
                                        <input onChange={updateExp(index)} value={obj.role} name='role' type = 'text'></input>
                    
                                        <label for = 'sdate'>Start Date: </label>
                                        <input onChange={updateExp(index)} value={obj.start} name='start' type = 'text' placeholder='Year'></input>
                    
                                        <label for = 'edate'>End Date: </label>
                                        <input onChange={updateExp(index)} value={obj.end} name='end' type = 'text' placeholder='Year'></input>
                    
                                        <label for = 'exp'>Tasks/Responsibilities: </label>
                                        <textarea onChange={updateExp(index)} value={obj.desc} name='desc' />
                                        <button className="del-btn">Delete</button>
                                    </fieldset>
                        );
                    })}
                </div>
                
            <button onClick={incEdu} className="add-btn">Add</button> 
            </fieldset>
              
            <Buttons 
              general = {props.general} 
              educations = {props.educations} 
              experiences = {experiences} 
            /> 
        </>
    );
    
};

export default Experience;