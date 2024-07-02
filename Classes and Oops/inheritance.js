class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`NEW course was added by: ${this.username}`); 
    }
}

const chai = new Teacher("Sant", "sant@teacher.com", "pass@123")

chai.addCourse()

const masalaChai = new User("Hariansh Singh")
masalaChai.logMe()

chai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);