const user = {
    username: "Hariansh Singh",
    loginCount: 8,
    singhedIn: true,

    getUserDetails: function() {
        // console.log(`Username: ${this["user name"]}`);
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()          //Constructors
// const Date = new Date()

function User(username, loginCount, isLoggedin) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin    

    return this
}

const userOne = new User("Hariansh Singh", 13, true)
// console.log(userOne);

const userTwo = new User("Supreet Kaur", 4, false)
console.log(userOne);

