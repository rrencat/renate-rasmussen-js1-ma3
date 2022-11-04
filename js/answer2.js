const apiKey = "64cb9923e48b4d6da419a453fb54ab09";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const gamesContainer = document.querySelector(".games-info");


async function getData() {

    const response = await fetch(url);

    const results = await response.json();

    const gamesInfo = results.results;
   

    gamesContainer.innerHTML = "";


    for (let i = 0; i < gamesInfo.length; i++) {

        if (i === 8) {
            break;
        }

        gamesContainer.innerHTML += `<div><p><strong>Name:</strong> ${gamesInfo[i].name}</p>
                                    <p>Rating: ${gamesInfo[i].rating}</p>
                                    <p>Tags: ${gamesInfo[i].tags.length}</p>
                                    </div>`;
    }

    
}

getData();
