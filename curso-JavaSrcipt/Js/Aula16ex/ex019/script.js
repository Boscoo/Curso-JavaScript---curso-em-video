var numeros = []
var res = document.querySelector('div#res')
//numeros = [2, 1, 7, 6, 5, 9, 4]

function adicionar(){
    let inum = document.querySelector('input#num')
    let num = Number(document.querySelector('input#num').value)
    let visor = document.querySelector('select#v')
    res.innerHTML = ''
    if (numeros.indexOf(num) == -1 && num > 0 && num < 100){
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        item.value = `v${num}`
        visor.appendChild(item) 
        inum.value = ''
    } else{
        alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar(){
    res.innerHTML = ''
    if (numeros.length > 0){
        res.innerHTML += `<p>Ao todo, temos ${numeros.length} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor()}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorValor()}.</p>`
        res.innerHTML += `<p>Somando todos os valores temo ${somarValores()}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${mediaValores()}.</p>`
    } else{
        alert('Adicione valores antes de Finalizar')
    }
}

function maiorValor(){
    let maior = 0
    for (let el in numeros){
        numeros[el] > maior ? maior = numeros[el] : maior = maior
    }
    return maior 
}

function menorValor(){
    numeros.sort()
    return numeros[0] 
}

function somarValores(){
    let resp = 0
    for (let e in numeros){
        resp += numeros[e] 
    }
    return resp
}

function mediaValores(){
    let res = 0
    for (let ele in numeros){
        res += numeros[ele]
    }
    return res / numeros.length
}
//console.log(mediaValores())