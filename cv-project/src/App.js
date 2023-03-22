import React, {Component} from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Buttons from './components/Buttons';
import Display from './components/Display';
import './styles/App.css';

class App extends Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     cv: {
  //       general:{
  //         name: '',
  //         role: '',
  //         number: '',
  //         address: '',
  //         mail: '',
  //     },
  //     generals: [],
  //     description: {
  //       main: '',
  //     },
  //     descriptions: [],
  //     educations: {
  //       school: '',
  //       degree: '',
  //       start: '',
  //       end: '',
  //     },
  //     education: [],
  //     experiences: {
  //       compnay: '',
  //       role: '',
  //       start: '',
  //       end: '',
  //       desc: '',
  //     },
  //     experience: [],
  //     }
  // };
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     cv: {
  //       general: {
  //         name: e.target.value,
  //         role: e.target.value,
  //         address: e.target.value,
  //         number: e.target.value,
  //         mail: e.target.value,
  //       },
  //       description: e.target.value,
  //       educations: {
  //         school: e.target.value,
  //         degree: e.target.value,
  //         start: e.target.value,
  //         end: e.target.value
  //       },
  //       experiences: {
  //         company: e.target.value,
  //         role: e.target.value,
  //         start: e.target.value,
  //         end: e.target.value,
  //         desc: e.target.value
  //       },
  //     }
  //   });
  // };

  // submitTask = (e) => {
  //   e.preventDefault();

  //   this.setState({
  //     generals: this.state.generals.concact(this.state.general),
  //     descriptions: this.state.descriptions.concact(this.state.description),
  //     educations: this.state.educations.concact(this.state.education),
  //     experiences: this.state.experiences.concact(this.state.experience)
  //   });
  // };

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
              <Education />
               <Experience />
              <Buttons />
            </form>
          </div>
          <Display />        
        </div>
      </div>
    );
  };
}

export default App;
