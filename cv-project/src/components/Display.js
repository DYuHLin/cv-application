import React, {Component} from 'react';
import ExperienceDisplay from './Display/ExperienceDisplay';

class Display extends Component {
  constructor(props){
    super(props);
  };

    render(){
      const expDisplay = [];
      for(let i = 0; i < this.props.experiences.num; i+=1){
        expDisplay.push(<ExperienceDisplay id = {i} />);
      };

      // console.log(this.props)
        return(
            <div className='preview'>
            <div className='res-content'>
            <div className='personal'>
            <div className='name-surname'>
                {this.props.general.name}
            </div>
                <div className='res-pos'>{this.props.general.role}</div>
                <div className='res-num'>{this.props.general.number}</div>
                <div className='res-address'>{this.props.general.address}</div>
                <div className='res-mail'>{this.props.general.mail}</div>
            </div>
              <div className='res-desc'>
                <div className='desc-title'>Description</div>

                <div className='desc-detail'>
                  {this.props.general.description}
                </div>

              </div>

              <div className='res-edu'>
                <div className='edu-title'>Education</div>
                <div className='edu-detail'>
                  <div className='edu-dates'>
                    <div className='edu-date'>{this.props.educations.startDate}</div>
                    <div>-</div>
                    <div className='edu-date'>{this.props.educations.endDate}</div>
                  </div>
  
                  <div className='edu-school'>
                    <div className='edu-school'>{this.props.educations.school}</div>
                    <div className='edu-degree'>{this.props.educations.degree}</div>
                  </div>
                </div>

              </div>

              <div className='res-exp'>
                <div className='exp-title'>Experience</div>

                <div className='exp-detail'>
                  
                  <div className='exp-place'>
                    <div className='exp-company'>{this.props.experiences.company}</div>
                    <div className='exp-role'>{this.props.experiences.role}</div>
                  </div>
                  <div className='exp-dates'>
                    <div className='exp-date'>{this.props.experiences.start}</div>
                    <div>-</div>
                    <div className='exp-date'>{this.props.experiences.end}</div>
                  </div>
                  <div className='desc-title'>Tasks/Responsibilities</div>
                  
                  <div className='desc-detail'>
                  {this.props.experiences.desc}
                </div>
                </div>
                {expDisplay}
              </div>
            </div>
              
          </div>
        );
    };
};

export default Display;