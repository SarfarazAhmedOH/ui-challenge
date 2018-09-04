import React, { Component } from 'react';

class CreateProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            lastName: '',
            firstName: '',
            emailAddress: '',
            specialty: '',
            practiceName: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange(e) {
     /*
               Because we named the inputs to match their
               corresponding values in state, it's
               super easy to update the state
             */
             this.setState({ [e.target.name]: e.target.value });
   }

    render () {
        return (
            <form >
              <span className={'bold-text'}>Create Provider</span>
              <label>
                Last Name:
                <input type="text" name="lastName" required onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                First Name:
                <input type="text" name="firstName" required onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                Email Address:
                <input type="text" name="emailAddress" required onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                Specialty:
                <input type="text" name="specialty" onChange={this.handleChange}/>
              </label>
              <br/>
              <label>
                Practice Name:
                <input type="text" name="practiceName" onChange={this.handleChange}/>
              </label>
              <br/>
              <button onClick={((e) => this.props.saveProvider(e, Object.assign({}, this.state)))}>Submit</button>
            </form>
        );
    }
}

export default CreateProvider;