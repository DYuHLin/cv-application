import React, {Component} from 'react';

class Experience extends Component {
    constructor(){
        super();
    };

    render(){
        return(
            <fieldset>
                <legend>Experience</legend>
                <label for = 'company'>Company: </label>
                <input  id='company' type = 'text'></input>

                <label for = 'role'>Role/Title: </label>
                <input  id='role' type = 'text'></input>

                <label for = 'sdate'>Start Date: </label>
                <input  id='sdate' type = 'date'></input>

                <label for = 'edate'>End Date: </label>
                <input  id='edate' type = 'date'></input>

                <label for = 'exp'>Tasks/Responsibilities: </label>
                <textarea  id='exp' />
                <button>Add</button>
                <button>Delete</button>
              </fieldset>
        );
    };
};

export default Experience;