import React, {useState} from 'react';
import Display from './Display';

const Buttons = (props) => {


  return(
    <>
      <div className='buttons'>
        <button className='reset-btn'>Reset</button>
        <button className='pdf-btn'>Download PDF</button>
      </div>

      <Display
        general = {props.general} 
        educations = {props.educations} 
        experiences = {props.experiences}
      /> 
    </>
  );

};

export default Buttons;