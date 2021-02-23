const printDouble = number => {

  return new Promise((resolve, reject) => {

    if(number != null){
      setTimeout(
        () => {
          return resolve(number * 2)
        }, 
        Math.floor(Math.random() * 100) + 1
      )
      
    } else {
      reject("Repasse um número corretamente!")
    }

  })
}

function printAll(){
  Promise.all([printDouble(5),printDouble(10),printDouble(22),printDouble(1),printDouble(89)])
  .then((result) => {
    return result.map(item => {
      console.log(item)
    })
  })
  .catch((err) => {
    return console.log(err)
  })
}

printAll()