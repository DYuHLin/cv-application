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
            <div className='buttons'>
              <button className='reset-btn'>Reset</button>
              <button className='pdf-btn'>Download PDF</button>
            </div>

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