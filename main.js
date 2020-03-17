const objUtils    = require("./objUtils");

let s1 = process.argv[2];

let s2 = process.argv[3];


try {
    console.log(objUtils.mapValues(s1,s2));
} catch (error) {
    console.log(error);
    
}
