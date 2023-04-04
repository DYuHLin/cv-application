import React, {Component} from "react";

class ExperiencePiece extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <fieldset>
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
                    <button className="del-btn">Delete</button>
                </fieldset>
        );
    };
};

export default ExperiencePiece;