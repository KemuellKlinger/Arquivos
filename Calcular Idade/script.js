function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtAno')
    let res = document.querySelector('#result')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Preencha os dados corretamente')
    } else {
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        let sex = document.getElementsByName('radSex')
        let idade = ano - fano.value

        if (sex[0].checked) {
            if (idade < 10) {
                res.innerHTML = `Uma criança do sexo masculino de ${idade} anos de idade`
                img.setAttribute('src', 'img/crianca.jpg')
            } else if (idade < 20) {
                res.innerHTML = `Uma adolescente do sexo masculino de ${idade} anos de idade`
                img.setAttribute('src', 'img/adolescente.webp')
            }else if (idade < 50) {
                res.innerHTML = `Uma adulto do sexo masculino de ${idade} anos de idade`
                img.setAttribute('src', 'img/Adulto.jfif')
            }else if (idade >= 50) {
                res.innerHTML = `Uma idoso do sexo masculino de ${idade} anos de idade`
                img.setAttribute('src', 'img/Idoso.jpg')
        }
        res.appendChild(img)

    }


}
}