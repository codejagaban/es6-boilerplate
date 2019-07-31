

const array = [1,2,3,4,4,5,6];
array.forEach(element => {
    element > 2 ? console.log(element * 4) : console.log(element);
});