import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Personal Details
        </h1>

        <div className='form-inputs'>
          <label className='form-label'>Salutation</label>
          <input
            className='form-input'
            type='text'
            name='salutation'
            placeholder='Salutation Required'
            value={values.salutation}
            onChange={handleChange}
          />
          {errors.salutation && <p>{errors.salutation}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your First Name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your Last Name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div className='form-inputs'>
        <label className='form-label'>DOB</label>
        <input
          className='form-input'
          type='date'
          name='birthdate'
          placeholder='Enter your DOB'
          value={values.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <p>{errors.birthdate}</p>}
      </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
        <label className='form-label'>Quote</label>
        <input
          className='form-input'
          type='number'
          name='quote'
          placeholder='Enter your Quote'
          value={values.quote}
          onChange={handleChange}
        />
        {errors.quote && <p>{errors.quote}</p>}
      </div>

        <div className='form-inputs'>
          <label className='form-label'>SSN Number</label>
          <input
            className='form-input'
            type='number'
            name='ssn'
            placeholder='Enter your SSN Number'
            value={values.ssn}
            onChange={handleChange}
          />
          {errors.ssn && <p>{errors.ssn}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Source Of Income</label>
          <input
            className='form-input'
            type='text'
            name='source'
            placeholder='Enter Your Source of income'
            value={values.source}
            onChange={handleChange}
          />
          {errors.source && <p>{errors.source}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Done
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;
