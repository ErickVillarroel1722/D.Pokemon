
//generar los pk
//Consultar la API
const consultarPokemon=(id,Number)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/${id}")
    .then(Response=>{
        return Response.json()
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error);
    })

}

//Generar los pokemones random

const btnSeleccionar=()=>{
    let primerPokemon= Math.round(Math.random()*150)
    let segundoPokemon= Math.round(Math.random()*150)
    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)
}
btnSeleccionar()

const lista =document.getElementById("listapokemon")


const pintarpokemon=(data,id)=>{
    
}