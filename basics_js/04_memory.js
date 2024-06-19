let userOne = {
    email: "user@google.com",
    upi: "user@pz" 
}

let usertwo = userOne

usertwo.email = "user@yahoo.com"

console.log(userOne.email);
console.log(usertwo.email);