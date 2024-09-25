let arr = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'painting', 'cooking'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};
function getInfor(arr){

    return arr.name
}

console.log(getInfor(arr))