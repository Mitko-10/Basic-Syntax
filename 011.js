function num(number){
    let name = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    let lastDigit = Math.abs(number) % 10
    console.log(name[lastDigit]) 
}
num(12)