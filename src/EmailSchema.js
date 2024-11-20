class EmailValidator {
  constructor() {
    this.minLength = 0;
    this.maxLength = Infinity;
  }

  setEmailLengthConstraint(minLength, maxLength) {
    this.minLength = minLength;
    if (maxLength !== undefined) {
      this.maxLength = maxLength;
    }
    return this;
  }

  isValid(value) {
    if (typeof value !== 'string' || !value.includes('@')) {
      return false;
    }

    const localPart = value.split('@')[0];

    const { length } = localPart;
    if (length < this.minLength || length > this.maxLength) {
      return false;
    }

    return true;
  }
}
export default EmailValidator;
