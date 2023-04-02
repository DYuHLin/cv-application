import React, {Component} from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Buttons from './components/Buttons';
import Display from './components/Display';
import './styles/App.css';

class App extends Component {
   constructor(){
     super();

   };

  render(){
    return (
      <div className='container'>
        <div className='header'>
          <div className='title'>CV Creator</div>
          <div className='link'></div>
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
  };
}

export default App;
