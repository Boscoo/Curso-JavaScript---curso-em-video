let amigo = {nome: 'josé', 
sexo: 'M', 
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
},
emagrecer(p){
    console.log('Emagreceu')
    this.peso -= p
}}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

amigo.emagrecer(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

