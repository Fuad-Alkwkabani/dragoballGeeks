const characterApiUrl = 'https://dragonball-api.com/api/characters?limit=58';
const getAllCharacters = async () => {
    try {
        const response = await fetch(characterApiUrl);
        const data = await response.json();
        return data;  
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    const characterList = document.getElementById('character-list');
    const characters = await getAllCharacters();

    if (characters) {
        const characterArray = characters;  
        console.log(characterArray.items)
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
            characterList.innerHTML += characterCard; 
        });
    } else {
        characterList.innerHTML = '<p>No se pudieron cargar los personajes.</p>';
    }
});