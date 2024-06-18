const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Hari"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sum@google.com",
    fullname: {
        userfullname: {
            firstname: "Hariansh",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "h", 2: "a"}
const obj2 = {3: "r", 4: "i"}

// const obj3 = Object.assign({}, obj1, obj2) // {} are recommended as better syntax, perhaps no effect on final output!

const obj3 = {...obj1, ...obj2} // spread method

// console.log(obj3);   

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));