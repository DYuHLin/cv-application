import React, {Component} from 'react';

class Education extends Component {
    constructor(){
        super();
    };

    render(){
        return(
            <fieldset>
                <legend>Education</legend>
                <label for = 'school'>School: </label>
                <input  id='school' type = 'text'></input>

                <label for = 'field'>Degree: </label>
                <input  id='field' type = 'text'></input>

                <label for = 'sdate'>Start Date: </label>
                <input  id='sdate' type = 'date'></input>

                <label for = 'edate'>End Date: </label>
                <input  id='edate' type = 'date'></input>
                <button>Add</button>
                <button>Delete</button>
              </fieldset>
        );
    };
};

export default Education;