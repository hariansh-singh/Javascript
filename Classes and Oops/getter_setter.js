class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const Hariansh = new User("hariansh@ai.com", "pass@123")
console.log(Hariansh);