function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'fotohomembebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotohomemjovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'fotohomemadulto.png')
            } else{
                //Idoso
                img.setAttribute('src', 'fotohomemidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'fotomulherbebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'fotomulheradulta.png')
            } else{
                //Idoso
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img)   
    }
}