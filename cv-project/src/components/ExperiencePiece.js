import React, {useState} from "react";

import Experience from "./Experience";

const ExperiencePiece = (props) => {
    const experiencesPiece = {
        expObj: {
            company: '',
            role: '',
            start: '',
            end: '',
            desc: '',
        },   
        jobs: []
    }
    const [experiencedPiece, setExperiencePiece] = useState(experiencesPiece);

    const handleChange = (e) => {
        setExperiencePiece({
            expObj:{
                ...experiencedPiece.expObj, [e.target.id]: e.target.value,
            }
            
            
        });
    };


         console.log(experiencedPiece.expObj);
        return(
            <fieldset id = {props.id}>
                    <label for = 'company'>Company: </label>
                    <input onChange={handleChange} value = {experiencedPiece.expObj.company}  id='company' type = 'text'></input>

                    <label for = 'role'>Role/Title: </label>
                    <input onChange={handleChange} value = {experiencedPiece.expObj.role}  id='role' type = 'text'></input>

                    <label for = 'sdate'>Start Date: </label>
                    <input onChange={handleChange} value = {experiencedPiece.expObj.start}  id='start' type = 'text' placeholder='Year'></input>

                    <label for = 'edate'>End Date: </label>
                    <input onChange={handleChange} value = {experiencedPiece.expObj.end}  id='end' type = 'text' placeholder='Year'></input>

                    <label for = 'exp'>Tasks/Responsibilities: </label>
                    <textarea onChange={handleChange} value = {experiencedPiece.expObj.desc} id='desc' />
                    <button className="del-btn">Delete</button>
                </fieldset>
    );
};

export default ExperiencePiece;