class EmailValidator{
    static validateEmail_UC4(email) {
        const EmailRegex = /^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)?@bridgelabz\.co$/;
        return EmailRegex.test(email);
    }
}

//correct email 
console.log(EmailValidator.validateEmail_UC4("abc@bridgelabz.co")); //without optional part is also valid
console.log(EmailValidator.validateEmail_UC4("abc.xyz@bridgelabz.co")); //valid after optional part is included
console.log(EmailValidator.validateEmail_UC4("abc+xyz@bridgelabz.co")); //valid with different special character preceding xyz

//wrong emails
console.log(EmailValidator.validateEmail_UC4("abc!xyz@bridgelabzco"));
console.log(EmailValidator.validateEmail_UC4("abc.@bridgelabz.in"));

