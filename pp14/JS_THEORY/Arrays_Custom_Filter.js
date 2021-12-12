Array.prototype.myFilter = function(cb) {

    let result = [];
    for(let i = 0; i<this.length; i++) {
        let originalArr = this;
        let value = this[i];
        let index = i;

        let returnedValue = cb(value, index, originalArr);
        if(returnedValue == true) {
            result.push(value);
        }
    }

    return result;
}

let arr = [2,3,5,6,7,8,9,10];
let oarr = arr.myFilter(function(v, i, orgarr) {
    if(v % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
});

console.log(oarr);