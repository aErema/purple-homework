'use strict'

console.log(check_birthday("2010.11.01"));
console.log(check_birthday("2010.05.16"));
console.log(check_birthday("2000.05.01"));

function check_birthday(day) {
    var date = new Date(day);
    var diff = new Date(new Date().getTime() - date.getTime());

    return diff.getUTCFullYear() - 1970 > 13;
}
