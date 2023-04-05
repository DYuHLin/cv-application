import React, {Component} from "react";

class ExperienceDisplay extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div id={this.props.id} className='exp-detail'>
                  <div className='exp-dates'>
                    <div className='exp-date'>{this.props.experiences.start}</div>
                    <div>-</div>
                    <div className='exp-date'>{this.props.experiences.end}</div>
                  </div>
                  
                  <div className='exp-place'>
                    <div className='exp-company'>{this.props.experiences.company}</div>
                    <div className='exp-role'>{this.props.experiences.role}</div>
                  </div>
                  <div className='desc-title'>Tasks/Responsibilities</div>
                  
                  <div className='desc-detail'>
                  {this.props.experiences.desc}
                </div>
                </div>
        );
    };
};

export default ExperienceDisplay;