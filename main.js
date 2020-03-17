const objUtils    = require("./objUtils");

let s1 = process.argv[2];
console.log(s1);

let s2 = process.argv[3];
console.log(s2);

try {
    console.log(objUtils.mapValues(s1,s2));
} catch (error) {
    console.log(error);
    
}
