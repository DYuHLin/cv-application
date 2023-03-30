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

   submitTask = (e) => {
    e.preventDefault();
};

  render(){
    // const {general, generals, description, descriptions, education, educations, experience, experiences} = this.state;
    return (
      <div className='container'>
        <div className='header'>
          <div className='title'>CV Creator</div>
          <div className='link'></div>
        </div>
        <div className='body'>
          <div className='form'>
            <form onSubmit={this.submitTask}>
              <General />
              {/* <Education />  */}
              {/* <Experience />  */}
              {/* <Buttons />  */}
            </form>
          </div>
          {/* <Display />         */}
        </div>
      </div>
    );
  };
}

export default App;
