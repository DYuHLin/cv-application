import React, {Component} from 'react';
import Buttons from './Buttons';

class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {
            experiences: {
                       company: '',
                       role: '',
                       start: '',
                       end: '',
                       desc: '',
            },
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
                <legend>Experience</legend>
                    <label for = 'company'>Company: </label>
                    <input onChange={this.handleChange} value = {this.company}  id='company' type = 'text'></input>

                    <label for = 'role'>Role/Title: </label>
                    <input onChange={this.handleChange} value = {this.role}  id='role' type = 'text'></input>

                    <label for = 'sdate'>Start Date: </label>
                    <input onChange={this.handleChange} value = {this.start}  id='start' type = 'text' placeholder='Year'></input>

                    <label for = 'edate'>End Date: </label>
                    <input onChange={this.handleChange} value = {this.end}  id='end' type = 'text' placeholder='Year'></input>

                    <label for = 'exp'>Tasks/Responsibilities: </label>
                    <textarea onChange={this.handleChange} value = {this.desc} id='desc' />

              </fieldset>
              
              <Buttons 
              general = {this.props.general} 
              educations = {this.props.educations} 
              experiences = {this.state} 
              /> 
            </>
        );
    };
};

export default Experience;