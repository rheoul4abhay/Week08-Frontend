class PINCodeValidator{
    static validatePIN_CODE_UC1(pin) {
        const pinCodeRegex = /^[0-9]{6}$/;
        return pinCodeRegex.test(pin);
    }
}

//correct pin 
console.log(PINCodeValidator.validatePIN_CODE_UC1("400088"));

//wrong pin
console.log(PINCodeValidator.validatePIN_CODE_UC1("A12345"));