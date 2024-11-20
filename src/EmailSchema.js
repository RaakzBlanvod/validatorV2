class EmailValidator {
  isEmail(str) {
    return typeof str === 'string' && str.includes('@');
  }

  isValid(str) {
    return this.isEmail(str);
  }
}

export default EmailValidator;
