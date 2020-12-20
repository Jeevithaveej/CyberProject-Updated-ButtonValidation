export default function validateInfo(values) {
  let errors = {};

  if (!values.salutation.trim()) {
    errors.salutation = '*Salutation required';
  }


  if (!values.firstname.trim()) {
    errors.firstname = '*FirstName required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.lastname.trim()) {
    errors.lastname = '*Lastname required';
  }

  if (!values.birthdate.trim()) {
    errors.birthdate = '*DOB required';
  }
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  
  if (!values.quote.trim()) {
    errors.quote = '*Quote required';
  }
  if (!values.ssn.trim()) {
    errors.ssn = '*SSN Number required';
  }
  if (!values.source.trim()) {
    errors.source = '*Source required';
  }
  
  return errors;
}
