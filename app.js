fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15")
.then(response => {
    if (!response.ok) {
        console.log(response.status)
        throw new Error('Error en la solicitud');
      }
      console.log(response.status)
    return response.json()
})
    .then(datos=>{
        
        const lista = document.querySelector("[data-ul]")
        datos.forEach(dato =>{
            const elemento = document.createElement("li")
            elemento.classList.add("card")
            elemento.innerHTML = `<img class="card__image" src="${dato.url}" alt="imagen">
                <h3 class="card__title">${dato.title}</h3>`
            lista.appendChild(elemento)
        })
    })
    .catch(error=>{
        console.log("Error en la solicitud fetch"+error)
    })
