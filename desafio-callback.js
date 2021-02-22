function printDouble(number, callback){
  setTimeout(
    () => {
      const results = number * 2
      return callback(results)
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll(){
  printDouble(5, (results)=> {
    console.log(results)
    printDouble(10, (results)=>{
      console.log(results)
      printDouble(22, (results)=>{
        console.log(results)
        printDouble(1, (results)=>{
          console.log(results)
          printDouble(89, (results)=>{
            console.log(results)
          })
        })
      })
    })
  })
}

printAll()