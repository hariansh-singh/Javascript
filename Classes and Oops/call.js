function setUsername(username) {
    //complex DB calls
    this.username = username
    console.log("Called!");
}

function createUser(username, email, password) {

    setUsername.call(this, username)           // using call, have to pass this

    this.email = email
    this.password = password
}

const user =  new createUser("Hariansh Singh", "harianshsingh13@gmail.com", "pass@123")
console.log(user);