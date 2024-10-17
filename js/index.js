const characterApiUrl = 'https://dragonball-api.com/api/characters?limit=58';
const planetApiUrl = 'https://dragonball-api.com/api/planets?limit=20';

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
                            <p class="card-text"> ${character.race } ${character.gender}</p>
                            <p class="card-text">Total KI: ${character.maxKi}</p>
                            <p class="card-text">Base KI: ${character.ki}</p>
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
const getAllPlanets = async () => {
    try {
        const response = await fetch(planetApiUrl);  
        const data = await response.json();  
        return data;  
    } catch (error) {
        console.error('Error fetching planets:', error);
        return [];  
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    const planetList = document.getElementById('planet-list');
    const planets = await getAllPlanets();  
    if (planets) {
        const planetArray = planets;  
        console.log(planetArray.items)
        
        planetArray.items.forEach(planet => {
            const planetCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${planet.image }" class="card-img-top" alt="${planet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${planet.name}</h5>
                            <p class="card-text">Descripción: ${planet.description || 'No disponible'}</p>
                        </div>
                    </div>
                </div>
            `;
            planetList.innerHTML += planetCard;  
        });
    } else {
        planetList.innerHTML = '<p>No se pudieron cargar los planetas.</p>';
    }
});