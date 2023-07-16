const array = [];
for (let i = 0; i < 3; i++) {
    let newArray = [];
    for (let i = 1; i < 6; i++) {
        newArray.push(i)
    }
    array.push(newArray)
}
console.log(array)