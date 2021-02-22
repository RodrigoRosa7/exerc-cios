function printDouble(number){

  return new Promise((resolve, reject) => {

    if(number != null){
      resolve(
        setTimeout(
          () => {
            return number * 2
          }, 
          Math.floor(Math.random() * 100) + 1
        )
      )
    } else {
      reject("Repasse um número corretamente!")
    }

  })
}

function printAll(){
  printDouble(5)
  .then((result) => {
    return console.log(result)
  }).catch((err) => {
    return console.log(err)
  })
}

printAll()