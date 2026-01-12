function printAndSym(start, end){
    let sequense = ""
    let sum = 0;
    for(let i = start; i <= end; i++){
        sequense += `${i } `
        sum += i
    }
    console.log(sequense.trim())
    console.log(`Sum: ${sum}`)
}
printAndSym(0, 26)