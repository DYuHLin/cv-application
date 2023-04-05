import React, {Component} from 'react';
import Buttons from './Buttons';
import ExperiencePiece from './ExperiencePiece';

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
                       num: 0,
            },
            jobs: []
        };
    };

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,
    });
};

incEdu = (e) => {
    e.preventDefault(e);
    const fieldContainer = document.getElementById("fields");
    this.setState({
        experiences: {
            num: this.state.experiences.num + 1,
        }
    });
    
};

    render(){
        const expField = [];
        console.log(this.state.experiences.num);
        for(let i = 0; i < this.state.experiences.num; i +=1){
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
                {expField}
                </div>
                
                {/* <button onClick={this.incEdu} className="add-btn">Add</button> */}
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