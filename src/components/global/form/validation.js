function freezeCompleteObject(object) {
  // WORKS WITH OBJECTS AND ARRAY
  Object.keys(object).map((key) => {
    if (typeof object[key] === "object") freezeCompleteObject(object[key]);
  });

  return Object.freeze(object);
}

export default class FormValidation {
  #inputs;
  #rules;
  #errors = {};
  #isValid = true;

  constructor(props) {
    this.#inputs = Object.assign({}, props.inputs);
    this.#rules = Object.assign({}, props.rules);

    freezeCompleteObject(this.#inputs);
    freezeCompleteObject(this.#rules);
  }

  set isValid(value) {
    this.#isValid = value;
  }
  get isValid() {
    return this.#isValid;
  }

  get inputs() {
    return this.#inputs;
  }

  get rules() {
    return this.#rules;
  }

  set errors(value) {
    this.#errors = value;
  }
  get errors() {
    return this.#errors;
  }

  get validate() {
    return this.#validate;
  }

  // VALIDATION RULES
  #validationRules = {
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
  #checkRules = (key, fieldValue, rules) => {
    for (let validateFunctionName in rules) {
      const { message, value } = rules[validateFunctionName];
      const validationFunction = this.#validationRules[validateFunctionName];

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
  #validateInput = (key) => {
    const fieldValue = this.inputs[key];
    const rules = this.rules[key];
    this.#checkRules(key, fieldValue, rules);

    return {
      isValid: this.isValid,
      errors: this.errors,
    };
  };

  // VALIDATION FOR COMPLETE FORM
  #validateForm = () => {
    // LOOP FIELDS
    for (let key in this.rules) {
      this.#validateInput(key);
      if (!this.isValid) break;
    }

    return {
      isValid: this.isValid,
      errors: this.errors,
    };
  };

  #validate = (fieldKey) => {
    if (fieldKey) {
      return this.#validateInput(fieldKey);
    } else {
      return this.#validateForm();
    }
  };
}
