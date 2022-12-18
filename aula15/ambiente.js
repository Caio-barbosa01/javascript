let num = [5, 8, 2, 9, 3]
num.push(1) //Comondo para o javascript escolher a posição da variavel de forma autonoma
num.sort() // Comando para ordernar os elementos
console.log(num)
console.log(`O vetor tem :${num.length} posições.`) // comando para descobrir a largura do vetor.
console.log(`O primeiro valor do vetor é:${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
