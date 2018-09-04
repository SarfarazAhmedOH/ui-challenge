import React from 'react';
import {PropTypes} from 'prop-types';
import '../App.css';

const ListProviders = ({providers, providerHandler, removeProviders}) =>  {
    return <div>
             <div>
                <span className={'bold-text'}>Provider List</span>
             </div>
              <div className={'scroll-provider'}>
                    {providers.map(function (provider, index) {
                            const id = provider['id'];
                            const lastName = provider['last_name'];
                            const firstName = provider['first_name'];
                            const emailAddress = provider['email_address'];
                            const specialty = provider['specialty'];
                            const practiceName = provider['practice_name'];
                            return (<div key={id} className={'label input'}>
                                       <label><input type="checkbox" defaultChecked={false} id={id} onClick={((e) => providerHandler(e, provider))}/><span className={'text-left'}>{lastName}, {firstName}</span> <span className={'text-right'}>{specialty}</span><br/><span className={'text-left'}>{emailAddress}</span><span className={'text-right'}>{practiceName}</span><br/></label>
                                    </div>
                                );
                        })}
              </div>
              <br/>
              <button className={'text-right'} onClick={removeProviders}>Remove</button>
        </div>
}

ListProviders.propTypes = {
    providers: PropTypes.array,
    providerHandler: PropTypes.func
}

export default ListProviders;
