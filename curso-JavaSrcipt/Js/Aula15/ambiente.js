let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1) // cuidado com a ordem dos comandos 
let posi = num.indexOf(5)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O valor 5 está na posição ${posi}`)

for (let p = 0; p < num.length; p++){
    console.log(`A posição ${p} tem o valor ${num[p]}`)
}

for (let pos in num){
    console.log(num[pos])
}