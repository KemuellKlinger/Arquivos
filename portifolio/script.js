function mudarTema() {
    let paragrafos = document.getElementsByName('.paragrafos');

    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        paragrafos.style.color = 'black'
        
    } else {
        document.body.style.backgroundColor = 'black';
       
    }
}
