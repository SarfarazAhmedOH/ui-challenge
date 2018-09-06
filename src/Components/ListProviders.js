import React from 'react';
import {PropTypes} from 'prop-types';
import '../App.css';
import Dropdown from './Dropdown.js';
import '../Css/Libraries/Bootstrap/css/bootstrap.css';

const ListProviders = ({params}) =>  {
    return <div>
             <div>
                <span className={'bold-text'}>Provider List</span>
                <div className="clearfix">
                              <Dropdown toggle={ params.toggle }
                                dropdownActive={ params.dropdownActive }
                                doOrderBy={ params.doOrderBy }
                                doOrder={ params.doOrder }
                                orderBy={ params.orderBy }
                                order={ params.order } />
                 </div>
             </div>
              <div className={'scroll-provider'}>
                    {params.providers.map(function (provider, index) {
                            const lastName = provider['last_name'];
                            const firstName = provider['first_name'];
                            const emailAddress = provider['email_address'];
                            const specialty = provider['specialty'];
                            const practiceName = provider['practice_name'];
                            return (<div key={index} className={'checkbox label input'}>
                                       <label><input type="checkbox" defaultChecked={false} id={index} onClick={((e) => params.providerHandler(e, provider))}/><span className={'text-left bold-text'}>{lastName}, {firstName}</span><span className={'text-right'}>{specialty}</span><br/><span className={'text-left'}>{emailAddress}</span><span className={'text-right'}>{practiceName}</span><br/></label><br/>
                                    </div>
                                );
                        })}
              </div>
              <br/>
              <button className={'text-right'} onClick={params.removeProviders}>Remove</button>
        </div>
}

ListProviders.propTypes = {
    providers: PropTypes.array,
    providerHandler: PropTypes.func
};

export default ListProviders;
