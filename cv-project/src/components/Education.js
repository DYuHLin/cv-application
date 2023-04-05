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
                num: 1
                }
            };
    };


    handleChange = (e) => {
        this.setState({

            [e.target.id]: e.target.value,           
        });
    };

    incExp = (e) => {
        e.preventDefault(e);
        this.setState({
            educations: {
                num: this.state.educations.num + 1,
            }
            
        });
        
    };
    
    render(){
        // console.log(this.state.educations.num);
        return(
            <>
            <fieldset id='educational'>
                <legend>Education</legend>
                    <fieldset>
                        <label for = 'school'>School: </label>
                        <input onChange={this.handleChange} value = {this.school} id='school' type = 'text'></input>

                        <label for = 'field'>Degree: </label>
                        <input onChange={this.handleChange} value = {this.degree}  id='degree' type = 'text'></input>

                        <label for = 'sdate'>Start Date: </label>
                        <input onChange={this.handleChange} value = {this.start}  id='startDate' type = 'text' placeholder='Year'></input>

                        <label for = 'edate'>End Date: </label>
                        <input onChange={this.handleChange} value = {this.end} id='endDate' type = 'text' placeholder='Year'></input>
                    </fieldset>
                    {/* <button onClick={this.incExp} className="add-btn">Add</button> */}
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