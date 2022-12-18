 function verificar () {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = window.document.getElementById('txtano')
     var res = document.querySelector('div#res')
    
     if (fano.value.length == 0 || Number(fano.value) > ano) {
         window.alert('[ERRO] Verifique os dados e tente novamente!')
     } else {
         var fsex = window.document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id' , 'foto')

         if (fsex[0].checked) {
             genero = 'homem'
             if(idade >= 0 && idade < 10 ) {
                // Criança
                img.setAttribute('src' , 'criança-h.png')
             } else if (idade < 21 ) {
                // Jovem
                img.setAttribute('src' , 'jovem-m.png')
             } else if (idade < 50 ) {
                // Adulto
                img.setAttribute('src' , 'homem-adulto.png')
             } else {
                //Idoso
                img.setAttribute('src' , 'homem-idoso.png')
             }

         } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src' , 'criança-m.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src' , 'jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'mulher-adulta.png')
            } else {
                // Idosa
                img.setAttribute('src' , 'mulher-idosa.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos genero ${genero} com ${idade} anos de idade.`
         res.appendChild(img)
     }     
 }