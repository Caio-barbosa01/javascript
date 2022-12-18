let valores = [8, 6, 4, 7, 9]

//Modo 1 de escrever
//console.log(valores)

//Modo 2 de escrever
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

//Modo 3 de escrever
for(pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}