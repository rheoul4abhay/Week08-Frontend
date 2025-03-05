class EmailValidator{
    static validateEmail_UC1(email) {
        const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+$/;
        return EmailRegex.test(email);
    }
}

//correct email 
console.log(EmailValidator.validateEmail_UC1("abc@bridgelabz"));

//wrong email
console.log(EmailValidator.validateEmail_UC1("abcxyz.com"));