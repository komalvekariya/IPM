export const validate = values => {
  const errors = {}
  if (!values.userFname) {
    errors.userFname = 'Required'
  } else if (values.userFname.length > 15) {
    errors.userFname = 'Must be 15 characters or less'
  }
  if (!values.Email) {
    errors.Email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
 
  return (errors)
}
