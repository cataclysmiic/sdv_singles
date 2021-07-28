//CREATE EMPTY ARRAYS
let likes = [];
let loves = [];
let dislikes = [];
let hates = [];
let villagers = [];


//SETUP SELECT FUNCTION
function setupSelect(select, options) {
    for (i = 0; i < options.length; i++) {
        const option = document.createElement("option");
        option.textContent = options[i];
        option.value = options[i];
        select.appendChild(option);
    }
}


//JOIN FORM MODAL
const joinForm = document.getElementById('join_form');
const joinModal = document.getElementById('join_modal');
const joinName = document.getElementById('join_name');
const joinEmail = document.getElementById('join_email');
const joinSeason = document.getElementById('join_season');
const joinDate = document.getElementById('join_date');
const joinLikes = document.getElementById('likes_select');
const joinLoves = document.getElementById('loves_select');
const joinDislikes = document.getElementById('dislikes_select');
const joinHates = document.getElementById('hates_select');
const joinQuote = document.getElementById('join_quote');
joinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    joinModal.innerHTML = `<p>You've joined with the following information:</p>
                            <table class="table table-borderless">
                            <tr>
                            <td><span class="badge p-2 bg-secondary">Name</span> ${joinName.value}</td>
                            <td><span class="badge p-2 bg-secondary">Birthday</span> ${joinSeason.value} ${joinDate.value}</td>
                            </tr>
                            <tr>
                            <td colspan="2"><span class="badge p-2 bg-secondary">Email</span> ${joinEmail.value}</td>
                            </tr>
                            <tr>
                            <td><span class="badge p-2 likes">Likes</span> ${joinLikes.value}</td>
                            <td><span class="badge p-2 dislikes">Dislikes</span> ${joinDislikes.value}</td>
                            </tr>
                            <tr>
                            <td><span class="badge p-2 loves">Loves</span> ${joinLoves.value}</td>
                            <td><span class="badge p-2 hates">Hates</span> ${joinHates.value}</td>
                            </tr>
                            <tr>
                            <td colspan="2"><span class="badge p-2 bg-secondary">Quote</span> ${joinQuote.value}</td>
                            </tr>
                            </table>`;
    joinForm.reset();
});


//FILTER SINGLES BY GROUP
const groupSelect = document.getElementById("group_select");
const bachelors = document.getElementsByClassName('bachelors');
const bachelorettes = document.getElementsByClassName('bachelorettes');

function showBachelors() {
    for (let i = 0; i < bachelors.length; i++) {
        bachelors[i].style.display = 'block';
    }
}

function showBachelorettes() {
    for (let i = 0; i < bachelorettes.length; i++) {
        bachelorettes[i].style.display = 'block';
    }
}

function hideBachelorettes() {
    for (let i = 0; i < bachelorettes.length; i++) {
        bachelorettes[i].style.display = 'none';
    }
}

function hideBachelors() {
    for (let i = 0; i < bachelors.length; i++) {
        bachelors[i].style.display = 'none';
    }
}

groupSelect.addEventListener('change', e => {
    if (groupSelect.value === "Bachelors") {
        showBachelors();
        hideBachelorettes();
    } else if (groupSelect.value === "Bachelorettes") {
        showBachelorettes();
        hideBachelors();
    } else if (groupSelect.value === "Everyone") {
        showBachelors();
        showBachelorettes();
    };
});


//FETCH JSON & GENERATE CARDS, ARRAYS, SELECTS
fetch('https://makeshiftjess.github.io/sdv_singles/villagers.json')
    .then(response => response.json())
    .then(json => {
        json.forEach(villager => {
            const div = document.createElement('div');
            div.innerHTML = `<div class="singles-card card mb-3 rounded-3 ${villager.group}">
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
            villagers.push(villager.name);
        })

        setupSelect(document.getElementById("likes_select"), likes);
        setupSelect(document.getElementById("loves_select"), loves);
        setupSelect(document.getElementById("dislikes_select"), dislikes);
        setupSelect(document.getElementById("hates_select"), hates);

        // setupSelect(document.getElementById("rank_select"), villagers);

        setupSelect(document.getElementById("villager_select"), villagers);
        setupSelect(document.getElementById("gift_select"), [...likes, ...loves, ...dislikes, ...hates]);

    })
    // BOOTSTRAP ENABLE TOOLTIP
    .then(tooltip => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    })