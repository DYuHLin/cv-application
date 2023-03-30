import React, {Component} from 'react';
import Display from './Display';
import General from './General';

class Buttons extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <>
              <button type='submit'>Submit</button>
              <button>Edit</button>
              <button>Download PDF</button>

              <Display
              general = {this.props.general} 
              educations = {this.props.educations} 
              experiences = {this.props.experiences}
              /> 
            </>
        );
    };
};

export default Buttons;