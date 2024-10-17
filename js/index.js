const characterApiUrl = 'https://dragonball-api.com/api/characters?limit=58';
const planetApiUrl = 'https://dragonball-api.com/api/planets?limit=20';
const transformationApiUrl = 'https://dragonball-api.com/api/transformations';

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
            characterList.innerHTML += `
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
            planetList.innerHTML += `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${planet.image }" class="card-img-planet" alt="${planet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${planet.name}</h5>
                            <p class="card-text">Descripción : ${planet.description }</p>
                        </div>
                    </div>
                </div>
            `; 
        });
    } else {
        planetList.innerHTML = '<p>No se pudieron cargar los planetas.</p>';
    }
});
const getAllTransformations = async () => {
    try {
        const response = await fetch(transformationApiUrl);  // Realiza la petición a la API
        const data = await response.json();  // Convierte la respuesta a JSON
        return data;  // Asegúrate de devolver toda la respuesta, incluyendo 'data'
    } catch (error) {
        console.error('Error fetching planets:', error);
        return [];  // Si ocurre un error, retorna un array vacío
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    const transformationList = document.getElementById('transformation-list');
    const transformations = await getAllTransformations();  
    if (transformations) {
        const transformationArray = transformations;  
        console.log(transformations)
        
        transformationArray.forEach(transformation => {
            const transformationCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${transformation.image }" class="card-img-top" alt="${transformation.name}">
                        <div class="card-body">
                            <h5 class="card-title">${transformation.name}</h5>
                            <p class="card-text">Descripción: ${transformation.ki}</p>
                        </div>
                    </div>
                </div>
            `;
            transformationList.innerHTML += transformationCard; 
        });
    } else {
        transformationList.innerHTML = '<p>No se pudieron cargar los planetas.</p>';
    }
});
