const characterApiUrl = 'https://dragonball-api.com/api/characters?limit=58';
const getAllCharacters = async () => {
    try {
        const response = await fetch(characterApiUrl);
        const data = await response.json();
        return data;  // Devolver los personajes
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    const characterList = document.getElementById('character-list');
    const characters = await getAllCharacters();

    if (characters) {
        const characterArray = characters;  // Aquí accedemos a la lista de planetas dentro de 'data'
        console.log(characterArray.items)
        // Recorre el array de planetas y genera el HTML para cada uno
        characterArray.items.forEach(character => {
            const  characterCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${character.image}" class="card-img-top" alt="${character.name}">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">Raza: ${character.race || 'Desconocida'}</p>
                            <p class="card-text">Descripción: ${character.description }</p>
                        </div>
                    </div>
                </div>
            `;
            characterList.innerHTML += characterCard;  // Agregar la tarjeta al contenedor de personajes
        });
    } else {
        characterList.innerHTML = '<p>No se pudieron cargar los personajes.</p>';
    }
});