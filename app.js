'use strict'

function dice(type){
    const typeObject = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];
    if (!typeObject.find(t => t === type.toLowerCase())) {
        return 'Тип не поддерживается';
    }
    const max = +type.slice(1);
    return Math.floor(Math.random() * max) + 1;
}

console.log(dice('D8'));
console.log(dice('D4'));
console.log(dice('D11'));
console.log(dice('D20'));
