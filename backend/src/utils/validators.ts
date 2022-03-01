/**
 * We authenticate and validate the admin at the backend.
 * This is done in the following steps:
 * 1. Check if the user exists in the database.
 * 2. Check if the password is correct.
 * 3. Generate a token.
 * 4. Return the user and the token.
 * 
 * When we validate a new admin creation, we do the following steps:
 * 1. Validate the user data
 * 2. Check if the user does not already exists in the database.
 * 3. Check if the password and the confirmation password match.
 * 4. Hash the password and create an auth token
 */


module.exports.validateRegisterInput = (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const errors: any = {};
    if (username.trim() === '') {
        errors.username = 'Username must not be empty';
    }
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
    } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address';
        }
    }

    // TODO: Check if password is empty or passwords match
    if (password === '') {
        errors.password = 'Password must not empty';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
    }

    // There's no errors
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
  
  module.exports.validateLoginInput = (username: string, password: string) => {
    const errors: any = {};
    if (username.trim() === '') {
      errors.username = 'Username must not be empty';
    }
    if (password.trim() === '') {
      errors.password = 'Password must not be empty';
    }
    
    // there's no errors
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
};