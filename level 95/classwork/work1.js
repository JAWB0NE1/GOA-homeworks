let num = prompt("enter year:")
console.log(num)
function calculation(){
    let yearend = num/100
    let years = Math.ceil(yearend)
    return years
}
calculation