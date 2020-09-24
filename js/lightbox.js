const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar')
const contenedorlight = document.querySelector('imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
          aparecerimagen(imagen.getAttribute('src'))
        
    })
})



const aparecerimagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
}