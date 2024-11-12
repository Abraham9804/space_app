async function solicitarDatos(){
    try{
        const solicitudFetch = await fetch("https://api.nasa.gov/planetary/apod?apia_key=DEMO_KEY&count=15")
        if(!solicitudFetch.ok){
            throw new Error("Error en el fetch: "+solicitudFetch.status)
        }
        const datos = await solicitudFetch.json()
        console.log(datos)
        const lista = document.querySelector("[data-ul]")
        datos.forEach(dato =>{
            const elemento = document.createElement("li")
            elemento.classList.add("card")
            elemento.innerHTML = `<img class="card__image" src="${dato.url}" alt="imagen">
                <h3 class="card__title">${dato.title}</h3>`
            lista.appendChild(elemento)
        })

    }
    catch(err){
        console.log("Error en la solicitud "+err)
    }
}

solicitarDatos()