const User = {
    _email: "h@singh.ai",
    _password: "pass@123",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}