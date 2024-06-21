const myObject = {
    js: 'javascript',
    cpp: 'C plus plus',
    py: 'python'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const family = ['Jasbir Singh', 'Gurmeet Kaur', 'Amrinder Singh', 'Rakhi', 'Supreet Kaur', 'Hariansh Singh', 'Bravo', 'Casper']

for (const key in family) {
    console.log(family[key]);
}