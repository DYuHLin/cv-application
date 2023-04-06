import React, {useState} from 'react';
import Buttons from './Buttons';
import ExperiencePiece from './ExperiencePiece';

const Experience = (props) => {

//     experiences: {
//         company: '',
//         role: '',
//         start: '',
//         end: '',
//         desc: '',
//         num: 0,
// },
// jobs: []
    const expFields = {
        company: '',
        role: '',
        start: '',
        end: '',
        desc: '',
        num: 0,
    };

    const [experiences, setExperiences] = useState(expFields);

    const handleChange = (e) => {
    setExperiences({
        ...experiences,[e.target.id]: e.target.value,
    });
};

const incEdu = (e) => {
    e.preventDefault(e);
    const fieldContainer = document.getElementById("fields");
    setExperiences({
        experiences: {
            num: this.state.experiences.num + 1,
        }
    });
    
};


        const expField = [];
        //  console.log(experiences.num);
        for(let i = 0; i < experiences.num; i +=1){
            expField.push(<ExperiencePiece id = {i} />)
            // console.log(expField);
        }
        return(
            <>
            <fieldset>
                <legend>Experience</legend>
                <div className='fields'>
                    <fieldset key="1">
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
                        
                    </fieldset> 
                    {expField}
                </div>
                
            {/* <button onClick={this.incEdu} className="add-btn">Add</button> */}
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