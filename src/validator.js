const validator = {
  isValid: function (number) {
    const arr = number.split ("")
    //console.log (arr)
    const arrr = arr.reverse ();
    //console.log (arrr)  
    let finalNumber = arrr
    for ( let i = 1; i < arrr.length; i=i+2) {
      arrr [i] = arrr[i]*2
      //console.log (finalNumber) 
    } 

    let addNumber = finalNumber
    for (let i = 1; i < finalNumber.length; i= i+2){      
      if (finalNumber[i] > 9) {
        finalNumber[i] = finalNumber[i] - 9; 
        //console.log (addNumber)
      } 
    } 

    let suma = addNumber.reduce ((accumulator, currentValue) => 
      Number (accumulator) + Number (currentValue), 0
    );
    //console.log (suma)


    let lastNumber = suma //%= 10;
    // let lastNumber = suma.toString().slice(-1);
    //console.log (lastNumber)
    // if (lastNumber === "0")
    return (lastNumber%10 !== 0 || lastNumber == "" ? false:true)
// Si el residuo de la división es === 0 - true
// Si está vacío el campo de la división === false 
// Si la división no es === 0 - false 
  //   if (lastNumber%10 === 0){
  //       return true
  //       console.log (lastNumber)
  //   } else {
  //       return false
  // }
},

  maskify: function (number) {

  const change = number.split ("")
  //console.log (change)

  let visible = []
  change.forEach((item, i) => {
      if (i<change.length-4){
        item = "#"
      }
      //console.log (item)
  visible.push (item)
      //console.log (visible)
    });
      //console.log (visible.join (''))
      return visible.join ('');
  }
        
}

export default validator;
