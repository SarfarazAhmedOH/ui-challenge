import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import ListProviders from './Components/ListProviders.js';
import CreateProvider from './Components/CreateProvider.js';
import './Css/Libraries/Bootstrap/css/bootstrap.css';
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
        orderBy: "last_name",
        order: "asc",
        dropdownActive: false,
        lastId: this.lastUniqueId()
      }
      this.providerHandler=this.providerHandler.bind(this);
      this.removeProviders=this.removeProviders.bind(this);
      this.saveProvider=this.saveProvider.bind(this);
      this.doOrderBy = this.doOrderBy.bind(this);
      this.doOrder = this.doOrder.bind(this);
      this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    let isActive = this.state.dropdownActive;
    isActive = !isActive;
    this.setState({dropdownActive: isActive});
  }
  doOrderBy(e){
    e.preventDefault();
    const newOrderBy = e.target.getAttribute('data-value');
    this.setState({orderBy : newOrderBy});
  }
  doOrder(e){
    e.preventDefault();
    const newOrder = e.target.getAttribute('data-value');
    this.setState({order : newOrder});
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
      e.preventDefault();
      const providers = Object.assign([], this.state.providers);
      const provider = data;
      let id = this.state.lastId;
      let idLn = id.length;
      let idIdx = id.lastIndexOf('-');
      let idSub = id.substr(idIdx+1, idLn);
      let nextId = id.substr(0, idIdx+1) + (Number(idSub) + 1).toString();
      provider.id = nextId;
      providers.push(provider);
      this.setState({providers:providers, lastId:nextId})
    }

    getParams(mode, sorted) {
         if (mode === 'list') {
             return {
                 providers: sorted,
                 providerHandler: this.providerHandler,
                 removeProviders: this.removeProviders,
                 toggle: this.toggle,
                 dropdownActive: this.state.dropdownActive,
                 doOrderBy: this.doOrderBy,
                 doOrder: this.doOrder,
                 orderBy: this.state.orderBy,
                 order: this.state.order
             };
         }else if (mode === 'create'){
             return {
                  handleFieldsChange: this.handleChangeValue,
                  saveProvider: this.saveProvider
             };
         }
}
  render() {

    const orderBy = this.state.orderBy;
    const order = this.state.order;
    let sorted = this.state.providers;

    sorted = _.orderBy(sorted, (item) => {
      return item[orderBy].toLowerCase()
    }, order);

    return (
      <div className='App container'>
            <div>
                <span className={'h3'}>Provider Directory</span><br/>
                <span className={'h6'}>v2.0</span><br/><br/>
            </div>
            <div className={'row container'}>
                <div className={'column-beg'}>
                </div>
                <div className={'column-one panel'}>
                    <CreateProvider params={this.getParams('create', sorted)}/>
                </div>
                <div className={'column-mid'}>
                </div>
                <div className={'column-two panel'}>
                    <ListProviders params={this.getParams('list', sorted)}/>
                </div>
            </div>
      </div>
    );
  }
}
export default App;
