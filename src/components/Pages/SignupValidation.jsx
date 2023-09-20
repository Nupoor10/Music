function Validation(values) {


    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
  
    if (values.name === "") {
        error.name = "Name field can't be empty";
      } 
       else {
        error.name = "";
      }

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
  