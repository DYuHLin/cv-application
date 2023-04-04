import React, {Component} from "react";

class EducationPiece extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <fieldset>
                <label for = 'school'>School: </label>
                <input onChange={this.handleChange} value = {this.school} id='school' type = 'text'></input>

                <label for = 'field'>Degree: </label>
                <input onChange={this.handleChange} value = {this.degree}  id='degree' type = 'text'></input>

                <label for = 'sdate'>Start Date: </label>
                <input onChange={this.handleChange} value = {this.start}  id='startDate' type = 'text' placeholder='Year'></input>

                <label for = 'edate'>End Date: </label>
                <input onChange={this.handleChange} value = {this.end} id='endDate' type = 'text' placeholder='Year'></input>

                <button className="del-btn">Delete</button>
            </fieldset>
        );
    };
};

export default EducationPiece;