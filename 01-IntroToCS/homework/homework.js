'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

 
    var numArr = num.split("");
    var suma = 0;
    for (var i = 0; i < numArr.length; i++){
        suma = suma + Math.pow(2, numArr.length - 1 - i) * numArr[i];
    }
    return suma;

}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}