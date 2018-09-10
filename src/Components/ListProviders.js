import React from 'react';
import {PropTypes} from 'prop-types';
import '../App.css';
import '../css/Libraries/Bootstrap/css/bootstrap.css';
import Dropdown from './Dropdown.js';

const ListProviders = ({params}) =>  {
    return <div>
              <div className={'row'}>
                 <div className={'col-md-6'}><span className={'bold-text'}>Provider List</span></div>
                 <div className={'col-md-6'}><span className={'pull-right'}>
                    <Dropdown toggle={ params.toggle }
                        dropdownActive={ params.dropdownActive }
                        doOrderBy={ params.doOrderBy }
                        doOrder={ params.doOrder }
                        orderBy={ params.orderBy }
                        order={ params.order } />
                 </span></div>
              </div>
              <br/>
              <div className={'scroll-provider'}>
                    {params.providers.map(function (provider, index) {
                            const id = provider['id'];
                            const lastName = provider['last_name'];
                            const firstName = provider['first_name'];
                            const emailAddress = provider['email_address'];
                            const specialty = provider['specialty'];
                            const practiceName = provider['practice_name'];


                            return (<div className={'div-color text-size'} key={id}>
                            <div className={'row'}>
                                          <span className={'col-md-1 checkbox'}>
                                            <label>
                                               <input type='checkbox' defaultChecked={false} id={id} onClick={((e) => params.providerHandler(e, provider))}/>
                                            </label>
                                          </span>
                                          <span className={'col-md-11'}>
                                                    <span className={'pull-left'}>{lastName}, {firstName}</span>
                                                    <span className={'pull-right'}>{specialty}</span>
                                                 <br/>
                                                    <span className={'pull-left'}>{emailAddress}</span>
                                                    <span className={'pull-right'}>{practiceName}</span>
                                          </span>
                                          </div>
                               </div>);
                     })}
              </div>
              <br/>
              <button className={'text-right buttonStyle'} onClick={params.removeProviders}>Remove</button>
        </div>
}

ListProviders.propTypes = {
    providers: PropTypes.array,
    providerHandler: PropTypes.func
};

export default ListProviders;
