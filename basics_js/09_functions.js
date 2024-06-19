    function sayMyName() {
        console.log("H");
        console.log("A");
        console.log("R");
        console.log("I");
    }

    // sayMyName()

    // function addTwoNumbers(num1, num2) {
    //     console.log(num1 + num2);
    // }

    function addTwoNumbers(num1, num2) {
        return num1 + num2
    }

    const addition = addTwoNumbers(3, 4)
    // console.log(addition);

    function loginUserMessage(username) {
        return `${username} just Logged in!`
    }

    const message = loginUserMessage("Hariansh")
    // console.log(message);


    function calculateCartPrice(...num1) {
        return num1
    }

    // console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9));


    const user = {
        username: "Hariansh Singh",
        price: 199
    }

    function handleObject(anyobject) {
        console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}.`);
    }

    handleObject(user)