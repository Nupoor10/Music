function Validation(values) {
  // Email validation
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }

  //   // Password validation
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password must be at least 6 characters long";
  //   }

  //   return errors;

  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;

  if (values.email === "") {
    error.email = "Email field can't be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password field can't be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "";
  } else {
    error.password = "";
  }
  return error;
};

export default Validation;
