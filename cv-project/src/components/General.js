import React, {Component} from 'react';

class General extends Component {
    constructor(props){
        super(props);
    };

    render(){
        const {title} = this.props;
        return(
            <fieldset>
                <legend>Personal Information</legend>
                <label for = 'name'>Name and Surname: </label>
                <input  id='name' type = 'text' />

                <label for = 'title'>Title: </label>
                <input  id='title' type = 'text' />

                <label for = 'number'>number: </label>
                <input  id='number' type = 'text' />

                <label for = 'mail'>Email: </label>
                <input  id='mail' type = 'email' />

                <label for = 'address'>Address: </label>
                <input  id='address' type = 'text' alt='select image' />
                
                <label for = 'desc'>Description: </label>
                <textarea  id='desc' />

              </fieldset>
        );
    };
};

export default General;