import EmailValidator from './src/EmailSchema.js';

class Validator {
  email() {
    return new EmailValidator();
  }
}

export default Validator;
