function loginForm(passwords){
    let userName = passwords[0]
    const password = userName.split('').reverse().join('')
    let attempts = 0
   for(let i = 1; i < passwords.length; i++){
    let currentPassWord = passwords[i]
    if(password == currentPassWord){
        console.log(`User ${userName} logged in. `)
    } else{
        attempts++
        if(attempts < 4){
        console.log("Inncorect password. Try again.")
        } else{
            console.log(`User ${userName} blocked!`)
        }
        

    }
   }

}
loginForm(['sunny','rainy','cloudy','sunny','not sunny'])