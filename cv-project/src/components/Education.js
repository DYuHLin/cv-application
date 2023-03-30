import React, {Component} from 'react';
import Experience from './Experience';

class Education extends Component {
    constructor(props){
        super(props);

        this.state = {
            educations: {
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                }
            };
    };


    handleChange = (e) => {
        this.setState({

            [e.target.id]: e.target.value,           
        });
    };

    render(){
        return(
            <>
            <fieldset>
                <legend>Education</legend>
                <label for = 'school'>School: </label>
                <input onChange={this.handleChange} value = {this.school} id='school' type = 'text'></input>

                <label for = 'field'>Degree: </label>
                <input onChange={this.handleChange} value = {this.degree}  id='degree' type = 'text'></input>

                <label for = 'sdate'>Start Date: </label>
                <input onChange={this.handleChange} value = {this.start}  id='startDate' type = 'date'></input>

                <label for = 'edate'>End Date: </label>
                <input onChange={this.handleChange} value = {this.end} id='endDate' type = 'date'></input>
                <button>Add</button>
                <button>Delete</button>
              </fieldset>
               <Experience 
              general = {this.props.general} 
              educations = {this.state} 
              /> 
            </>
        );
    };
};

export default Education;