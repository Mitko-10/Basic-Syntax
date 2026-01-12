function roundTo(number, presision){
    if(presision > 15){
        presision = 15
    }

    let rounded = number.toFixed(presision)
    console.log(parseFloat(rounded))
}
roundTo(10.5,3)