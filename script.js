function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

   /* if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else{
        html.classList.add('light')
    }
    */

    //pegar a tag img 
    const img = document.querySelector("#profile img")
    //e substituir a imagem
    if(html.classList.contains('light')) {
    //se tiver light mode adicionar a img light
    img.setAttribute('src', './assets/avatar-mat-day.jpg') 
    } else{
    //se tiver sem light mode, manter a img original
    img.setAttribute('src','./assets/avatar-matdark.png')

    }
    
    
    
    
}