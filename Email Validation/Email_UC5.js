class EmailValidator{
    static validateEmail_UC5(email) {
        const EmailRegex = /^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
        return EmailRegex.test(email);
    }
}

//correct email 
console.log(EmailValidator.validateEmail_UC5("abc@bridgelabz.co")); //without optional part is also valid
console.log(EmailValidator.validateEmail_UC5("abc.xyz@bridgelabz.co.in")); //valid after optional part is included after .co
console.log(EmailValidator.validateEmail_UC5("abc+xyz@bridgelabz.co.in")); //valid with different special character preceding xyz

//wrong emails
console.log(EmailValidator.validateEmail_UC5("abc.xyz@bridgelabz.co.org"));
console.log(EmailValidator.validateEmail_UC5("abc.xyz@bridgelabz.co.i"));
