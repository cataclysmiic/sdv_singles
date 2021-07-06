fetch('https://cataclysmiic.github.io/sdv_singles/villagers.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.getElementById('villager').innerHTML = `<h5 class="card-title">${json[0].name}</h5>
        <p class="card-text">${json[0].bday}</p>
        <p class="card-text">${json[0].loves}</p>`;
    })
