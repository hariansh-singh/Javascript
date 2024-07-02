class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const Hariansh = new User("Hariansh Singh")
console.log(Hariansh.createId());

