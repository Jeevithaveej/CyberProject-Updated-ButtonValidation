import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import AdditionalDetails from './AdditionalDetails';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
  
      <div className='form-container'>
     
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <AdditionalDetails />
        )}
      </div>
    
  );
};

export default Form;
