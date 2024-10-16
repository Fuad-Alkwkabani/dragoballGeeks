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
const getAllPlanets = async () => {
    try {
        const response = await fetch(planetApiUrl);  // Realiza la petición a la API
        const data = await response.json();  // Convierte la respuesta a JSON
        return data;  // Asegúrate de devolver toda la respuesta, incluyendo 'data'
    } catch (error) {
        console.error('Error fetching planets:', error);
        return [];  // Si ocurre un error, retorna un array vacío
    }
};
document.addEventListener('DOMContentLoaded', async () => {
    const planetList = document.getElementById('planet-list');
    const planets = await getAllPlanets();  // Llama a la función para obtener todos los planetas
    // Verifica si los datos están en la propiedad 'data'
    if (planets) {
        const planetArray = planets;  // Aquí accedemos a la lista de planetas dentro de 'data'
        console.log(planetArray.items)
        // Recorre el array de planetas y genera el HTML para cada uno
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
            planetList.innerHTML += planetCard;  // Agrega las tarjetas de planetas al contenedor
        });
    } else {
        planetList.innerHTML = '<p>No se pudieron cargar los planetas.</p>';
    }
});