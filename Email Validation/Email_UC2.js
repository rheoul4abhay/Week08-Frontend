class EmailValidator{
    static validateEmail_UC2(email) {
        const EmailRegex = /^[a-zA-Z0-9]+@bridgelabz[a-zA-Z]+$/;
        return EmailRegex.test(email);
    }
}

//correct email 
console.log(EmailValidator.validateEmail_UC2("abc@bridgelabzcom"));

//wrong email
console.log(EmailValidator.validateEmail_UC2("abc@xyzcom"));