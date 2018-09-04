import React, { Component } from 'react';
import './App.css';
import ListProviders from './Components/ListProviders.js';
import CreateProvider from './Components/CreateProvider.js';
import UniqueId from 'react-html-id'


class App extends Component {
  constructor() {
      super();
      UniqueId.enableUniqueIds(this);
      this.state = {
        providers: [
                       {id: this.nextUniqueId(), last_name: 'Harris', first_name: 'Mike', email_address: 'mharris@updox.com', specialty: 'Pediatrics', practice_name: 'Harris Pediatrics'},
                       {id: this.nextUniqueId(), last_name: 'Wijoyo', first_name: 'Bimo', email_address: 'bwijoyo@updox.com', specialty: 'Podiatry', practice_name: 'Wijoyo Podiatry'},
                       {id: this.nextUniqueId(), last_name: 'Rose', first_name: 'Nate', email_address: 'nrose@updox.com', specialty: 'Surgery', practice_name: 'Rose Cutters'},
                       {id: this.nextUniqueId(), last_name: 'Carlson', first_name: 'Mike', email_address: 'mcarlson@updox.com', specialty: 'Orthopedics', practice_name: 'Carlson Orthopedics'},
                       {id: this.nextUniqueId(), last_name: 'Witting', first_name: 'Mike', email_address: 'mwitting@updox.com', specialty: 'Pediatrics', practice_name: 'Witting’s Well Kids Pediatrics'},
                       {id: this.nextUniqueId(), last_name: 'Juday', first_name: 'Tobin', email_address: 'tjuday@updox.com', specialty: 'General Medicine', practice_name: 'Juday Family Practice'}
                   ],
        selectedProviders:[],
        provider: {id: '', last_name: '', first_name: '', email_address: '', specialty: '', practice_name: ''}

      }
      this.providerHandler=this.providerHandler.bind(this);
      this.removeProviders=this.removeProviders.bind(this);
      this.saveProvider=this.saveProvider.bind(this);
  }

  providerHandler(e, provider) {
    const selectedProviders = Object.assign([], this.state.selectedProviders);
    if (selectedProviders.includes(provider)){
        const delIndex = selectedProviders.indexOf(provider);
        if (delIndex !== -1) {
            selectedProviders.splice(delIndex, 1);
        }
    } else {
        selectedProviders.push(provider);
    }
    this.setState({selectedProviders:selectedProviders})
  }

  removeProviders() {
    const selectedProviders = Object.assign([], this.state.selectedProviders);
    const providers = Object.assign([], this.state.providers);
    selectedProviders.forEach(provider => {
        const delIndex = providers.indexOf(provider);
        if (delIndex !== -1) {
            providers.splice(delIndex, 1);
        }
    });
    this.setState({providers: providers, selectedProviders: []})
  }
  saveProvider(e, data) {
      const providers = Object.assign([], this.state.providers);
      const provider = Object.assign({}, this.state.provider);
      provider.id = this.nextUniqueId();
      provider.last_name = data['lastName'];
      provider.first_name = data['firstName'];
      provider.email_address = data['emailAddress'];
      provider.specialty = data['specialty'];
      provider.practice_name = data['practiceName'];
      providers.push(provider);
      this.setState({providers:providers, provider: {id: '', last_name: '', first_name: '', email_address: '', specialty: '', practice_name: ''}})
      e.preventDefault();
    }
  render() {
    return (
      <div className='App'>
            <div className={''}>
                <h3>Provider Directory</h3>
                <span>v2.0</span>
            </div>
            <div className={'row'}>
                <div className={'column-one'}>
                    <CreateProvider saveProvider={this.saveProvider}/>
                </div>
                <div className={'column-two'}>
                    <ListProviders providers={this.state.providers} providerHandler={this.providerHandler} removeProviders={this.removeProviders} />
                </div>
            </div>
      </div>
    );
  }
}
export default App;
