const harry = "https://hp-api.onrender.com/api/characters";
let listaDeAmigos = document.getElementById("listaDeAmigos");

let lista = [];

function convertPersonagemToLi(personagem){
    return `
    <li class="amigo">
        <h3>${personagem.name}</h3>
        <p>Ator: ${personagem.actor}</p>
        <p>Casa: ${personagem.house}</p>
    </li>
    `
}


fetch(harry)
    .then((response) => response.json())
    .then((jsonresponse) => listaDeAmigos.innerHTML += jsonresponse.map(convertPersonagemToLi).join(""))
    .catch((error) => console.log(error))

