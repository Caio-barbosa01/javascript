function contar () {
     //Armazenei os dados da pagina.
     var ini = window.document.getElementById('txti')
     var fim = window.document.getElementById('txtf')
     var passo = window.document.getElementById('txtp')
     var res = window.document.getElementById('res')
     
     if(ini.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0) {
         window.alert('[ERRO] Preencha os dados corretamente')
         res.innerHTML = 'Impossivel Contar'
     } else {
         //Conberter os dados da pagina
         res.innerHTML = 'Contando: <br> '
         var i = Number(ini.value)
         var f = Number(fim.value)
         var p= Number(passo.value)
         
         if(p <= 0) {
             window.alert('Se passo for menor ou igual a 0, vai considerar passo 1.')
             p = 1
         }
         if (i < f) {
             // Contagem crescente
             for(var c = i; c <= f; c += p) {
             res.innerHTML += `${c} \u{1F449}` 
             }
         } else {
             // Contagem regressiva
             for(var c = i; c >= f; c -= p) {
             res.innerHTML += `${c} \u{1F449}`
             }
         }
         res.innerHTML += `\u{1F3C1}`
     }
}

//4545
/*function contar () {
     var ini = document.getElementById('txti')
     var fim = document.getElementById('txtf')
     var passo = document.getElementById('txtp')
     var res = document.getElementById('res') 

     if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Preencha os dados corretamente!')
     } else {
         res.innerHTML = 'Contando: <br> '
         var i = Number(ini.value)
         var f = Number(fim.value)
         var p = Number(passo.value)
         
         if (p <=0){
            window.alert('Passo invalido, Considerando passo 1')
            p = 1
         }
         if (i < f) {
             //Contagem crescente
             for(var c = i; c <= f; c += p) {
             res.innerHTML += `${c}  \u{1F449} `
             }  
         } else {
             //Contagem regressiva
             for(var c = i; c >= f; c -= p) {
             res.innerHTML += `${c} \u{1F449}`
             }   
         }
         res.innerHTML += `\u{1F3C1}`
     } 
 }
 */
   