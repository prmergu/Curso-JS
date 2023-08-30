function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 16) {
                img.setAttribute('src', 'homem-a.png')
            } else if(idade < 21){
                img.setAttribute('src', 'homem-b.png')
            }else if(idade < 60) {
                img.setAttribute('src', 'homem-c.png')
            }else {
                img.setAttribute('src', 'homem-d.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 16) {
                img.setAttribute('src', 'mulher-a.png')
            } else if(idade < 21){
                img.setAttribute('src', 'mulher-b.png')
            }else if (idade < 60) {
                img.setAttribute('src', 'mulher-c.png')
            }else  {
                img.setAttribute('src', 'mulher-d.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    
        res.appendChild(img)
    }
}