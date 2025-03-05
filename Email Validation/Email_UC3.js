class EmailValidator{
    static validateEmail_UC3(email) {
        const EmailRegex = /^[a-zA-Z0-9]+@bridgelabz\.co$/;
        return EmailRegex.test(email);
    }
}

//correct email 
console.log(EmailValidator.validateEmail_UC3("abc@bridgelabz.co"));

//wrong emails
console.log(EmailValidator.validateEmail_UC3("abc@bridgelabz.in"));
console.log(EmailValidator.validateEmail_UC3("abc@bridgelabzco"));
