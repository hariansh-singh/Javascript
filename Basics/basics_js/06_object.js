// singelton

// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hariansh",
    "full name": "Hariansh Singh",
    [mySym]: "mykey1",
    age: 20,
    location: "Tarn Taran",
    email: "21bcs6145@cuchd.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "harianshsingh13@gmail.com"
console.log(jsUser.email);
// Object.freeze(jsUser)

jsUser.email = "haryyankee1@gmail.com" // after freezing, changes cannot be made in object!
// console.log(jsUser.email);
// console.log("\n");
// console.log(jsUser);

jsUser.greetings = function() {
    console.log("Sat Sri Akaal!");
}
jsUser.greetingsTwo = function() {
    console.log(`Sat Sri Akaal! ${this["full name"]}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());