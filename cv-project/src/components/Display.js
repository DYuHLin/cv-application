import React, {useState} from 'react';
import ExperienceDisplay from './Display/ExperienceDisplay';

const Display = (props) => {

      const expDisplay = [];
      for(let i = 0; i < props.experiences.num; i+=1){
        expDisplay.push(<ExperienceDisplay id = {i} />);
      };

      console.log(props)
  return(
    <div className='preview'>
        <div className='res-content'>
          <div className='personal'>
            <div className='name-surname'>
              {props.general.name}
            </div>
            <div className='res-pos'>{props.general.role}</div>
            <div className='res-num'>{props.general.number}</div>
            <div className='res-address'>{props.general.address}</div>
            <div className='res-mail'>{props.general.mail}</div>
          </div>
          <div className='res-desc'>
            <div className='desc-title'>Description</div>

            <div className='desc-detail'>
              {props.general.description}
            </div>

          </div>

          <div className='res-edu'>
            <div className='edu-title'>Education</div>
            <div className='edu-detail'>
              <div className='edu-dates'>
                <div className='edu-date'>{props.educations.startDate}</div>
                  <div>-</div>
                  <div className='edu-date'>{props.educations.endDate}</div>
              </div>
        
              <div className='edu-school'>
                <div className='edu-school'>{props.educations.school}</div>
                <div className='edu-degree'>{props.educations.degree}</div>
              </div>
            </div>

          </div>

          <div className='res-exp'>
            <div className='exp-title'>Experience</div>

            <div className='exp-detail'>
                      
              <div className='exp-place'>
                <div className='exp-company'>{props.experiences.company}</div>
                <div className='exp-role'>{props.experiences.role}</div>
              </div>
              <div className='exp-dates'>
                <div className='exp-date'>{props.experiences.start}</div>
                <div>-</div>
                <div className='exp-date'>{props.experiences.end}</div>
              </div>
              <div className='desc-title'>Tasks/Responsibilities</div>
                      
              <div className='desc-detail'>
                {props.experiences.desc}
              </div>
            </div>
              {expDisplay}
          </div>
      </div>
              
  </div>
        );
};

export default Display;