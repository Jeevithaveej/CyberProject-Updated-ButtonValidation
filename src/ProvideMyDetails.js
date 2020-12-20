import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form';
import AdditionalDetails from './AdditionalDetails';
import SecurityIncident from './SecurityIncident';


const ProvideMyDetails = () => {



  
    return  (
      <Router>
              <div>
             
                <nav>
                  <ul >
                    <li>
                      <Link to="/FormSignup">Personal Details</Link>
                    </li>
                    <li>
                      <Link to="/AdditionalDetails">Additional Details</Link>
                    </li>
                    <li>
                      <Link to="/SecurityIncident">Security Incidents & Loss History</Link>
                      
                    </li>
                  </ul>
                </nav>
                

                 <Route path="/FormSignup" exact component={Form} />
                 <Route path="/AdditionalDetails" component={AdditionalDetails} />
                 <Route path="/SecurityIncident" component={SecurityIncident}/>
                
              </div>
        </Router>
      // <div className="form-content-right">
      // <form className="providemydetails">
      // <div><button className='form-input-btn' type='submit'>
      // Personal Details
      // </button><br/>
      // <button className='form-input-btn' type='submit' >
      // Additional Details
      // </button><br/>
      // <button className='form-input-btn' type='submit' >
      // Security Incidents
      // </button>
      // </div>
      // </form>
      // </div>
      )
    
}
export default ProvideMyDetails