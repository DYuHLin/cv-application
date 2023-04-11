import React, {useRef, useState} from 'react';
import Display from './Display';
import { useReactToPrint } from 'react-to-print';

const Buttons = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return(
    <>
      <div className='buttons'>
        <button onClick={handlePrint} type='button' className='pdf-btn'>Download PDF</button>
        
      </div>

      <Display
        ref = {componentRef}
        general = {props.general} 
        educations = {props.educations} 
        experiences = {props.experiences}
      /> 
    </>
  );

};

export default Buttons;