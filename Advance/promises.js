// const promiseOne = new Promise(function(resolve, reject) {
//     //Do async tasks
//     //DB calls, cryptography, network
//     setTimeout(function() {
//         // console.log("Async task has been completed!");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function() {
//     // console.log("Promise consumed!");
// })


// //    ***********+++++++++**********    //


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function() {
//     // console.log("Async 2 resolved");
// })


// //    ***********+++++++++**********    //


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "Chai" , email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user) {
//     // console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true

//         if(!error) {
//             resolve({username: "Hariansh Singh" , password: "12345"})
//         } 
//         else {
//             reject('ERROR: something went wrong!')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     // console.log(user);
//     return user.username
// })
// .then((username) => {
//     // console.log(username);
// })
// .catch((error) => {
//     // console.log(error);
// })
// // .finally(() => console.log("The promise is either resolved or rejected!"))



const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true

        if(!error) {
            resolve({username: "javascript" , password: "12345"})
        } 
        else {
            reject('ERROR: JS went wrong!')
        }
    }, 1000)
});

async function consumedPromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}

consumedPromiseFive()