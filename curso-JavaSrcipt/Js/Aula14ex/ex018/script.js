function tabuada(){
    var num = document.querySelector('input#num').value
    var res = document.querySelector('select#tabuada')
    if (num.length == 0){
        alert('Por favor, digite um numero!')
    } else{
        var c = 0
        var n = Number(num)
        res.innerHTML = ''
        while (c <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        res.appendChild(item)
        c++
        }
    }
}