const mapValues = function mapValues(s1,s2){

    if (typeof(s1) !== 'string' || typeof(s2) !== 'string')
    {
        throw "Input is not string";
    }

    let x = s1.length;
    let y = s2.length;
    let obj = {};
    for(let i=0; i< x; i++)
    {
        key = s1[i];
        if(key in obj)
        {
            obj[key] = ++obj[key];
        }
        else
        {
            obj[key] = 1;
        }
    }
    let s1Length = Object.keys(obj).length;

    if(s1Length === y){
        return true;
    }
    return false;
}

module.exports = {
    mapValues
}