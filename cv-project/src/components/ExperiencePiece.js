import React, {Component} from "react";
import uniqid from "uniqid";
import Experience from "./Experience";

class ExperiencePiece extends Component {
    constructor(props){
        super(props);
        this.state = {
            experienced: {
                       id: uniqid(),
                       company: '',
                       role: '',
                       start: '',
                       end: '',
                       desc: '',
            },
            jobs: []
        };
    };

    handleChange = (e) => {
        this.setState({
            id: this.state.experienced.id,
            [e.target.id]: e.target.value,
        });
    };

    // sendExp = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         jobs: this.state.jobs.concat(this.state.experienced),
    //     });

    //     console.log(this.state.jobs);
    // };

    render(){
        const {experienced} = this.state;
         console.log(this.state);
        return(
            <fieldset id = {this.props.id}>
                    <label for = 'company'>Company: </label>
                    <input onChange={this.handleChange} value = {this.company}  id='company' type = 'text'></input>

                    <label for = 'role'>Role/Title: </label>
                    <input onChange={this.handleChange} value = {this.role}  id='role' type = 'text'></input>

                    <label for = 'sdate'>Start Date: </label>
                    <input onChange={this.handleChange} value = {this.start}  id='start' type = 'text' placeholder='Year'></input>

                    <label for = 'edate'>End Date: </label>
                    <input onChange={this.handleChange} value = {this.end}  id='end' type = 'text' placeholder='Year'></input>

                    <label for = 'exp'>Tasks/Responsibilities: </label>
                    <textarea onChange={this.handleChange} value = {this.desc} id='desc' />
                    <button className="del-btn">Delete</button>
                    {/* <button onClick={this.sendExp} className="pdf-btn">Send</button> */}
                </fieldset>
        );
    };
};

export default ExperiencePiece;