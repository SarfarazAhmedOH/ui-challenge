import React, { Component } from 'react';

class CreateProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            last_name: '',
            first_name: '',
            email_address: '',
            specialty: '',
            practice_name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
   }

    handleSubmit (e) {
        e.preventDefault();
        const id = this.state.id;
        const last_name = this.state.last_name;
        const first_name = this.state.first_name;
        const email_address = this.state.email_address;
        const specialty = this.state.specialty;
        const practice_name = this.state.practice_name;
        this.props.params.saveProvider(e, {id, last_name, first_name, email_address, specialty, practice_name});
        this.setState({last_name: ''});
        this.setState({first_name: ''});
        this.setState({email_address: ''});
        this.setState({specialty: ''});
        this.setState({practice_name: ''});
    }
    render () {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className='row'>
                <span className={'col-md-12 bold-text pull-left'}>Create Provider</span>
              </div>
              <br/>
              <label>
                Last Name:
                <input type="text" name="last_name" value={this.state.last_name} required onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                First Name:
                <input type="text" name="first_name" value={this.state.first_name} required onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                Email Address:
                <input type="text" name="email_address" value={this.state.email_address} required onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                Specialty:
                <input type="text" name="specialty" value={this.state.specialty} onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                Practice Name:
                <input type="text" name="practice_name" value={this.state.practice_name} onChange={this.handleChange}/>
              </label>
              <br/><br/>
              <button className={'buttonStyle'}>Submit</button>
            </form>
        );
    }
}

export default CreateProvider;