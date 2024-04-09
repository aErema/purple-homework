'use strict'

const arrayOfObjects = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 1, name: "Вася"},
];

console.log(unionArrayOfObjects(arrayOfObjects));

function unionArrayOfObjects(array) {
    const checkSet = new Set(array.map((item) => item.id));
    let arrayOfObjects = [];
    checkSet.forEach((value) => {
        arrayOfObjects = [...arrayOfObjects, array.find(item => item.id === value)];
    });
    return arrayOfObjects;
}
