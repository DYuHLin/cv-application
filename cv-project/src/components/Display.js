import React, {Component} from 'react';

class Display extends Component {
    constructor(props){
        super(props);
    };

    render(){
        const {title} = this.props;
        return(
            <div className='preview'>
            <div className='res-content'>
            <div className='personal'>
            <div className='name-surname'>
                Damian Lin Goncalves
            </div>
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
        );
    };
};

export default Display;