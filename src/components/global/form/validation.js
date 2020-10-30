export default class FormValidation {
  constructor(state) {
    this.inputs = state.inputs;
    this.errors = {};
    this.rules = state.rules;
    this.isValid = true;
  }

  // VALIDATION RULES
  _validationRules = {
    required: (val) => !!val,
    min: (val, length) => val && val.length >= length,
    cardNumberFirstDigit: (val, numbersArray) => {
      const numbersPattern = numbersArray.join("|");
      const fullPattern = `^(${numbersPattern})$`;
      const pattern = new RegExp(fullPattern);

      return pattern.test(val[0]);
    },
    cardNumber: (val) => {
      const pattern = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
      return pattern.test(val);
    },
    exparationDate: (val) => {
      const pattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
      if (pattern.test(val)) {
        const userDateStr = val.replace("/", "/01/");
        const userDate = new Date(userDateStr);

        return new Date() < userDate;
      }

      return false;
    },
  };

  // LOOP VALIDATION RULES
  _checkRules = (key, fieldValue, rules) => {
    for (let validateFunctionName in rules) {
      const { message, value } = rules[validateFunctionName];
      const validationFunction = this._validationRules[validateFunctionName];

      if (!validationFunction(fieldValue, value)) {
        // FIND FIRST ERROR AND EXIT
        this.errors[key] = message;
        this.isValid = false;
        break;
      }
    }
    return this.isValid;
  };

  // VALIDATION FOR SPECIFIC FIELD
  _validateInput = (key) => {
    const fieldValue = this.inputs[key];
    const rules = this.rules[key];
    this._checkRules(key, fieldValue, rules);

    return {
      isValid: this.isValid,
      errors: this.errors,
    };
  };

  // VALIDATION FOR COMPLETE FORM
  _validateForm = () => {
    // LOOP FIELDS
    for (let key in this.rules) {
      this._validateInput(key);
      if (!this.isValid) break;
    }

    return {
      isValid: this.isValid,
      errors: this.errors,
    };
  };

  validate = (fieldKey) => {
    if (fieldKey) {
      return this._validateInput(fieldKey);
    } else {
      return this._validateForm();
    }
  };
}
