// let myName = "Hariansh    "

// console.log(myName.truelength);



let myHeros = ["thor, spiderman, ironman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function() {
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.hariansh = function() {
    console.log("Hariansh is present in all objects!");
}

// heroPower.hariansh()

// myHeros.hariansh()

Array.prototype.hellohari = function() {
    console.log("Yes! it is present");
}

// myHeros.hellohari()
// heroPower.hellohari()



let anotherUsername = "Supreet     "

String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()