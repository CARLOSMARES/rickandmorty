// Add JS here

const btnFetchCharacters = document.getElementById("btnFetchCharacters");
const characters = document.getElementById("characters");
btnFetchCharacters.addEventListener("click", async () => {
    await fetch("https://rickandmortyapi.com/api/character")
    .then(data => data.json())
    .then(data => {
        let i = 0;
        array = data.results;
        array.forEach(element => {
            characters.innerHTML += "Name: " + element.name + "<br>"
            characters.innerHTML += "Image: <img src=" + element.image + "><br>"
            characters.innerHTML += "Status: " + element.status + "<br>"
            characters.innerHTML += "Species: " + element.species + "<br>"
            characters.innerHTML += "Gender: " + element.gender + "<br>"
            characters.innerHTML += "Origin: " + element.origin.name + "<br>"
            characters.innerHTML += "Location: " + element.location.name + "<br>"
            characters.innerHTML += "Episodes: " + element.episode.length + "<br>"
            characters.innerHTML += "Created: " + element.created + "<br>"
        });
    })
    .catch(err => console.log(err))
});