function printDouble(number){
  if(number != null){
    setTimeout(
      () => {
        return number * 2
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  } else {
    const err = "Deu pau"
    return err
  }
}

async function printAll(){
  try {
    const result = await printDouble(5)
    console.log(result)  

  } catch (err) {  
    console.log("Deu pau! " +  err)
  }
  
}

printAll()