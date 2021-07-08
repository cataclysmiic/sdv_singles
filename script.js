fetch('https://cataclysmiic.github.io/sdv_singles/villagers.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        json.forEach(villager => {
            const div = document.createElement('div');
            div.innerHTML = `<div class="card mb-3 rounded-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 text-center" style="background: #f7f7f7;">
                    <img src="img/${villager.name}.png" class="img-fluid mx-auto d-block" alt="${villager.name}">
                    <h5 class="card-title pt-2">${villager.name}</h5>
                    <span class="badge rounded-pill bg-dark">${villager.bday}</span>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body lead">
                        <p>“${villager.quote}”</p>
                        <table class="table table-borderless mb-0 text-center">
                            <tr>
                            <td><span class="badge p-2" style="background: #B33C86;">Loves</span></td>
                            <td><span class="badge p-2" style="background: #EA638C;">Likes</span></td>
                            <td><span class="badge p-2" style="background: #C6ECAE;">Dislikes</span></td>
                            <td><span class="badge p-2" style="background: #94C9A9;">Hates</span></td>
                            </tr>
                            <tr>
                            <td><img src="img/${villager.loves}.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${villager.loves}"></td>
                            <td><img src="img/${villager.likes}.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${villager.likes}"></td>
                            <td><img src="img/${villager.dislikes}.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${villager.dislikes}"></td>
                            <td><img src="img/${villager.hates}.png" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${villager.hates}"></td>
                            </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </div>`;
            document.getElementById('singles').appendChild(div);
        });
    })


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})