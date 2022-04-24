'use strict'

function reverseString(Name)
{
    let reverseName = "";
    let len = Name.length;
    for(let i = 0; i < len; i++)
    {
        reverseName += Name[len - 1 - i]
    }
    return reverseName
}

let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);
