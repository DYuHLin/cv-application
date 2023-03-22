import React, {Component} from 'react';

class Buttons extends Component {
    constructor(props){
        super(props);
    };

    render(){
        const {title} = this.props;
        return(
            <>
              <button type='submit'>Submit</button>
              <button>Edit</button>
              <button>Download PDF</button>
            </>
        );
    };
};

export default Buttons;