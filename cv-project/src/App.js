import React, {Component} from 'react';
import './styles/App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      
    };
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

            </form>
          </div>
    
          <div className='preview'>

          </div>
        </div>
      </div>
    );
  };
}

export default App;
