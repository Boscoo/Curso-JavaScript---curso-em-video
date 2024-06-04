function contador(inicio, fim, passo){
    var res = document.querySelector('div#resp')
    var resp = `<p>Contando: </p>`
    if(inicio < fim){
        //crescente
        for (var i = Number(inicio); i <= Number(fim); i += Number(passo)){
            resp += `${i}  \u{1F449}`//${String.fromCodePoint(0x1F449)}
        }
        resp += ` ${String.fromCodePoint(0x1F3C1)}`//\u{1F3C1}
    } else{
        //decrescente
        for (var i = Number(inicio); i >= Number(fim); i -= Number(passo)){
            resp += `${i}  \u{1F449}`
        }
        resp += ` ${String.fromCodePoint(0x1F3C1)}`//\u{1F3C1}
    }
    res.innerHTML = resp 
}
function contar(){
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    if (inicio != '' && fim != '' && passo != '' && passo >= 0){
        contador(inicio, fim, passo)
    } else if (Number(passo) <= 0){
        alert('Passo inválido! Considerando PASSO 1')
        contador(inicio, fim, 1)
    } else if (inicio == '' || fim == '' || passo == ''){
        res.innerHTML = 'Impossível contar!'
    }
}
