// for of loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
// //     console.log(num);
// }

// Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '--', value);
}


const myObject = {
    game1: "NFS",
    game2: "Asphalt",
    game3: "Mario"
}

for (const [key, value] of myObject) {
    console.log(key, '--', value);
}