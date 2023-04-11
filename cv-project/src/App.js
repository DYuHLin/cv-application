import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Buttons from './components/Buttons';
import Display from './components/Display';
import './styles/App.css';

const App = () => {


    return (
    <div className='container'>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className='header'>
        <div className='title'>CV Creator</div>
        <div className='link'>
          <a href='https://github.com/DYuHLin/cv-application'><i class='bx bxl-github'></i></a>
        
        </div>
      </div>
      <div className='body'>
        <div className='form'>
          <form>
            <General />
          </form>
        </div>
          
      </div>
    </div>
  );

}

export default App;
