function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
 // pegar a tag img
 const img = document.querySelector("#profile img")
 let altInfo = "Foto de Mayk Brito sorrindo, usando óculos de grau, jaqueta preta em um fundo gradiente azul e roxo"
   // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos de sol, jaqueta preta em um fundo gradiente azul e roxo')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    
    img.setAttribute('alt', altInfo)
    // se tiver sem light mode, manter a imagem normal
  }

 


  
  
  

}