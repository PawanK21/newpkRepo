Array.prototype.mySome = function(cb) {

    let isValid = false;
    for(let i = 0; i<this.length; i++) {
        isValid = cb(this[i], i, this);
        if(isValid) {
            return true;
        }
    }
    return isValid;
}

let arr = [1,2,3,4,5];
let isValid = arr.mySome(function(v, i, oarr) {
    if(v % 2 == 1){
        return true;
    }
    else {
        return false;
    }
});
console.log(isValid);
