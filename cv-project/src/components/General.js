import React, {Component} from 'react';
import Display from './Display';
import Education from './Education';

class General extends Component {
    constructor(){
        super();
        this.state = {
            general:{
            name: "",
            role: "",
            number: "",
            address: "",
            mail: "",
            description: ""
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
                <legend>Personal Information</legend>
                <label for = 'name'>Name and Surname: </label>
                <input onChange={this.handleChange} value = {this.name}  id='name' type = 'text' />

                <label for = 'title'>Title: </label>
                <input onChange={this.handleChange} value = {this.role}  id='role' type = 'text' />

                <label for = 'number'>number: </label>
                <input onChange={this.handleChange} value = {this.number}  id='number' type = 'text' />

                <label for = 'mail'>Email: </label>
                <input onChange={this.handleChange} value = {this.mail}  id='mail' type = 'email' />

                <label for = 'address'>Address: </label>
                <input onChange={this.handleChange} value = {this.address}  id='address' type = 'text' alt='select image' />
                
                <label for = 'desc'>Description: </label>
                <textarea onChange={this.handleChange} value = {this.description} id='description' />
              </fieldset>
               <Education 
              general = {this.state} 
              /> 
            </>
        );
    };
};

export default General;