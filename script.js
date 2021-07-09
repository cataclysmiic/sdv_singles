let likes = [];
let loves = [];
let dislikes = [];
let hates = [];


fetch('https://cataclysmiic.github.io/sdv_singles/villagers.json')
    .then(response => response.json())
    .then(json => {
        json.forEach(villager => {
            const div = document.createElement('div');
            div.innerHTML = `<div class="singles-card card mb-3 rounded-3 d-block">
                <div class="row g-0">
                    <div class="col-md-4 text-center ltgrey py-2">
                    <img src="img/${villager.name}.png" class="img-fluid mx-auto d-block photo" alt="${villager.name}">
                    <h5 class="card-title pt-2">${villager.name}</h5>
                    <span class="badge rounded-pill bg-dark">${villager.bday}</span>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body lead">
                        <p>“${villager.quote}”</p>
                        <table class="table table-borderless mb-0 text-center">
                            <tr>
                            <td><span class="badge p-2 loves">Loves</span></td>
                            <td><span class="badge p-2 likes">Likes</span></td>
                            <td><span class="badge p-2 dislikes">Dislikes</span></td>
                            <td><span class="badge p-2 hates">Hates</span></td>
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

            likes.push(villager.likes);
            loves.push(villager.loves);
            dislikes.push(villager.dislikes);
            hates.push(villager.hates);
        })

        const likesSelect = document.getElementById("likes_select");
        for(i = 0; i < likes.length; i++) {
            var option = document.createElement("option");
            option.textContent = likes[i];
            option.value = likes[i];
            likesSelect.appendChild(option);
        }
        const lovesSelect = document.getElementById("loves_select");
        for(i = 0; i < loves.length; i++) {
            var option = document.createElement("option");
            option.textContent = loves[i];
            option.value = loves[i];
            lovesSelect.appendChild(option);
        }
        const dislikesSelect = document.getElementById("dislikes_select");
        for(i = 0; i < dislikes.length; i++) {
            var option = document.createElement("option");
            option.textContent = dislikes[i];
            option.value = dislikes[i];
            dislikesSelect.appendChild(option);
        }
        const hatesSelect = document.getElementById("hates_select");
        for(i = 0; i < hates.length; i++) {
            var option = document.createElement("option");
            option.textContent = hates[i];
            option.value = hates[i];
            hatesSelect.appendChild(option);
        }
    })
    .then(tooltip => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    })