 function tabuada () {
      var num = document.getElementById('txtn')
      var tab = document.getElementById('seltab')

      if(num.value.length == 0) {
           //alerta para caso não tenha nenhum numero
           window.alert('Por favor digite um numero')
      } else {
           //Converte o numero e criar a estrutura da tabuada.
           var n = Number(num.value)
           var c = 1

           //Para zerar a tabuada
           tab.innerHTML = ''

           //Criar a condição da tabuada com elemento while.
           while(c <= 10) {
                //Para gerar uma resposta dentro do selecte eu tenho que criar um ITEM.
                var item = document.createElement('option')
                //Criando texto dentro do opiton
                item.text = `${n} x ${c} = ${n * c}`
                //gerar a responta do elemento option
                item.value = `tab ${c}`
                tab.appendChild(item)
                c++    
           }
      }
 }