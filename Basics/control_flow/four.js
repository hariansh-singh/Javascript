const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal}, 0
)

console.log('Total sum is:', myTotal);