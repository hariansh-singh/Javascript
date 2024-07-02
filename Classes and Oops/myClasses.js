// ES6

class User{
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPasssword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const userOne = new User("Hariansh Singh", "harianshsingh13@gmail.com", "pass@123")
console.log(userOne.encryptPasssword());
console.log(userOne.changeUsername());