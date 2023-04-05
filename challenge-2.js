function findDigits(n) {
    let count = 0;
    const nArray = n.toString().split('');
    for (let index = 0; index < nArray.length; index++) {
        if (n%nArray[index]===0) {
            count+=1;
        }
    }
return count;
}

console.log(findDigits(1012))
