class PINCodeValidator{
    static validatePIN_CODE_UC4(pin) {
        const pinCodeRegex = /^(\d{3}\s?\d{3})$/;
        return pinCodeRegex.test(pin);
    }
}

//correct pin 
console.log(PINCodeValidator.validatePIN_CODE_UC4("400 088"));

//wrong pin
console.log(PINCodeValidator.validatePIN_CODE_UC4("4000 88"));