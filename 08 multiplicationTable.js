function multyTable(number){
    let sum = 0;
    for(let i = 1; i <= 10; i++){
        sum = number * i;
        console.log(`${number} X ${i} = ${sum}`)
    }
}
multyTable(2)