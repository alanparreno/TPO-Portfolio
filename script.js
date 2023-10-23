document.addEventListener('DOMContentLoaded', function () {
    const randomButton = document.getElementById('random-button');
    randomButton.addEventListener('click', getRandomCharacter);

    function getRandomCharacter() {
        const characterTable = document.getElementById('character-data');
        characterTable.innerHTML = ''; // Limpia la tabla

        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                // Obtiene un índice aleatorio para seleccionar un personaje al azar
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const randomCharacter = data.results[randomIndex];

                // Crea una fila en la tabla con los datos del personaje
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${randomCharacter.name}</td>
                    <td>${randomCharacter.height}</td>
                    <td>${randomCharacter.mass}</td>
                    <td>${randomCharacter.hair_color}</td>
                    <td>${randomCharacter.skin_color}</td>
                    <td>${randomCharacter.gender}</td>
                `;

                characterTable.appendChild(row);
            })
            .catch(error => console.error('Error al obtener el personaje', error));
    }
});
