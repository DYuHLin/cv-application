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
              <fieldset>
                <legend>Personal Information</legend>
                <label for = 'name'>Name and Surname: </label>
                <input id='name' type = 'text' />

                <label for = 'title'>Title: </label>
                <input id='title' type = 'text' />

                <label for = 'number'>number: </label>
                <input id='number' type = 'text' />

                <label for = 'mail'>Email: </label>
                <input id='mail' type = 'email' />

                <label for = 'address'>Address: </label>
                <input id='address' type = 'text' alt='select image' />
                
                <label for = 'desc'>Description: </label>
                <textarea id='desc' />

              </fieldset>

               <fieldset>
                <legend>Education</legend>
                <label for = 'school'>School: </label>
                <input id='school' type = 'text'></input>

                <label for = 'field'>Degree: </label>
                <input id='field' type = 'text'></input>

                <label for = 'sdate'>Start Date: </label>
                <input id='sdate' type = 'date'></input>

                <label for = 'edate'>End Date: </label>
                <input id='edate' type = 'date'></input>
                <button>Add</button>
                <button>Delete</button>
              </fieldset>

              <fieldset>
                <legend>Experience</legend>
                <label for = 'company'>Company: </label>
                <input id='company' type = 'text'></input>

                <label for = 'role'>Role/Title: </label>
                <input id='role' type = 'text'></input>

                <label for = 'sdate'>Start Date: </label>
                <input id='sdate' type = 'date'></input>

                <label for = 'edate'>End Date: </label>
                <input id='edate' type = 'date'></input>

                <label for = 'exp'>Tasks/Responsibilities: </label>
                <textarea id='exp' />
                <button>Add</button>
                <button>Delete</button>
              </fieldset>
            </form>
          </div>
    
          <div className='preview'>
            <div className='res-content'>
            <div className='personal'>
                <div className='name-surname'>Damian Lin Goncalves</div>
                <div className='res-pos'>Frontend Developer</div>
                <div className='res-num'>072 347 9981</div>
                <div className='res-address'>36 Chevrolet Street, Randfontein</div>
                <div className='res-mail'>dyhlin2000@gmail.com</div>
              </div>

              <div className='res-desc'>
                <div className='desc-title'>Description</div>

                <div className='desc-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed 
                vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. 
                Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.
                </div>

              </div>

              <div className='res-edu'>
                <div className='edu-title'>Education</div>
                <div className='edu-detail'>
                  <div className='edu-date'>2012 - 2014</div>
                  <div className='edu-school'>
                    <div className='edu-school'>Univerity of Cape Town</div>
                    <div className='edu-degree'>Batchelors: Computer Science</div>
                  </div>
                </div>

                <div className='edu-detail'>
                  <div className='edu-date'>2015 - 2016</div>
                  <div className='edu-school'>
                    <div className='edu-school'>Univerity of Cape Town</div>
                    <div className='edu-degree'>Masters: Computer Science</div>
                  </div>
                </div>

              </div>

              <div className='res-exp'>
                <div className='exp-title'>Experience</div>

                <div className='exp-detail'>
                  <div className='exp-date'>2015 - 2016</div>
                  <div className='exp-place'>
                    <div className='exp-company'>Reddit</div>
                    <div className='exp-role'>Junior Web Developer</div>
                  </div>
                </div>

                <div className='exp-detail'>
                  <div className='exp-date'>2016 - 2020</div>
                  <div className='exp-place'>
                    <div className='exp-company'>Twitter</div>
                    <div className='exp-role'>Frontend Developer</div>
                  </div>
                </div>
              </div>
            </div>
              
          </div>
        </div>
      </div>
    );
  };
}

export default App;
