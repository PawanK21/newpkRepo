let arr = [
    "Sumeet Malik",
    "Arnav Jha",
    "Pawan Kumar",
    "Saurabh Sukla",
    "Vivek Bisla"
]

let ans = arr.map(function(v, i, arr) {
    return v.split(" ")[0][0] + "." + v.split(" ")[1][0] + ".";
})

console.log(ans);
