//Pegando dados do site
 let num = document.querySelector('input#txtn')
 let lista = document.querySelector('select#flista')
 let res = document.querySelector('div#res')

 // Criar um vetor(array) para analisar os dados.
 let valores = []

 //Criar função para para receber o numero e adiocnar na lista.
 function isNumero(n) {
     // Criar uma condição de verificação se é ou nao um número.
     if( Number(n) >= 1 && Number(n) <=100) {
         return true
     } else {
         return false
     }
 }

 function inLista (n,l) {
     // Criar uma condicão para verificar se o número esta na lista.
     if(l.indexOf(Number(n)) != -1) {
         return true
     } else {
         return false
     }
 }

 // Criando a função para adicionar número.
 function adicionar () {
     // Criar condição de analise para verificar se o valor digitado é um número e não esta na lista. 
     //OBS= ! significa não em javascript
     if( isNumero(num.value) && !inLista(num.value, valores)) {
         //Adicionar um elemento no vetor (array) no caso na variavel let valores
         valores.push(Number(num.value))
         // Adicionar os valores no select
         let item = document.createElement('option')
         item.text = `Valor ${num.value} foi adicionado.`
         lista.appendChild(item)
         //Limpar o resultado, quando eu adicionar outro valor.
         res.innerHTML = ''
     } else {
         window.alert('Valor invalido, ou ja encontraso na lista.')
     }

     //Comando para limpar o botão de adicionar.
     num.value = ''
     num.focus ()
 }

 // Criar a função para finalizar o programa, onde vai dar detalhes dos valores.
 function finalizar () {
    //Criar uma condição para analisar se o vetor(array) esta vazio.
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
         // Criar variaveis para analisar vetores.
         let tot = valores.length
         let maior = valores [0]
         let menor = valores [0]
         // Variavel para calcular média
         let soma = 0 
         let media = 0
         
         //Criar um condição FOR para verificar qual é o maior e o menor valor da vetor.
         for(let pos in valores) {
             //calculo de soma.
             soma += valores [pos]
             if (valores [pos] > maior) 
                 maior = valores [pos]
             if (valores [pos]< menor) 
                 menor = valores [pos]  
         }

         //Criando o calculo de média.
         media = soma / tot
         //Zera o resultado
         res.innerHTML = ''
         // Adicionar resultado
         res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
         res.innerHTML += `<p>O maior valor informado foi ${maior} .</p>`
         res.innerHTML += `<p>O menor valor informado foi ${menor} .</p>`
         res.innerHTML += `<p>Somando todos os valores temos ${soma}. </p>`
         res.innerHTML += `<p> A media dos valores digitados é ${media} </p>`
    }
 }