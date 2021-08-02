// CREATE EMPTY ARRAYS
let likes = [];
let loves = [];
let dislikes = [];
let hates = [];
let villagers = [];


// SETUP SELECT FUNCTION
function setupSelect(select, options) {
    for (i = 0; i < options.length; i++) {
        const option = document.createElement("option");
        option.textContent = options[i];
        option.value = options[i];
        select.appendChild(option);
    }
}


// FETCH JSON & GENERATE CARDS, ARRAYS, SELECTS
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

        if (!localStorage.getItem('name')) {
            setupSelect(document.getElementById("likes_select"), likes);
            setupSelect(document.getElementById("loves_select"), loves);
            setupSelect(document.getElementById("dislikes_select"), dislikes);
            setupSelect(document.getElementById("hates_select"), hates);
        }

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


// JOIN/PROFILE AREA
const joinArea = document.getElementById('join');
const profileArea = document.getElementById('profile');


// JOIN FORM INFO
const joinForm = document.getElementById('join_form');
const joinModal = document.getElementById('join_modal');
const joinName = document.getElementById('join_name');
const joinSeason = document.getElementById('join_season');
const joinDate = document.getElementById('join_date');
const joinLikes = document.getElementById('likes_select');
const joinLoves = document.getElementById('loves_select');
const joinDislikes = document.getElementById('dislikes_select');
const joinHates = document.getElementById('hates_select');
const joinQuote = document.getElementById('join_quote');


// JOIN FORM BEHAVIOR
joinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('name', joinName.value);
    localStorage.setItem('season', joinSeason.value);
    localStorage.setItem('day', joinDate.value);
    localStorage.setItem('likes', joinLikes.value);
    localStorage.setItem('dislikes', joinDislikes.value);
    localStorage.setItem('loves', joinLoves.value);
    localStorage.setItem('hates', joinHates.value);
    localStorage.setItem('quote', joinQuote.value);
    joinArea.style.display = 'none';
    showProfile();
});


// SAVE JOIN FORM INFO TO LOCALSTORAGE
const profileName = localStorage.getItem('name');
const profileSeason = localStorage.getItem('season');
const profileDay = localStorage.getItem('day');
const profileLikes = localStorage.getItem('likes');
const profileDislikes = localStorage.getItem('dislikes');
const profileLoves = localStorage.getItem('loves');
const profileHates = localStorage.getItem('hates');
const profileQuote = localStorage.getItem('quote');


//GENERATE PROFILE FROM JOIN FORM INFO
function showProfile() {
    profileArea.innerHTML = `<h1 class="display-5 py-3">Join</h1>
                            <div class="singles-card card mb-3 rounded-3">
                            <div class="row g-0">
                            <div class="col-md-4 text-center ltgrey py-5" style="min-height:297px;">
                                <img src="img/Krobus.png" class="img-fluid mx-auto d-block photo" alt="${profileName}">
                                <h5 class="card-title pt-2">${profileName}</h5>
                                <span class="badge rounded-pill bg-dark">${profileSeason} ${profileDay}</span>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body lead">
                                <p>“${profileQuote}”</p>
                                <table class="table table-borderless mb-0 text-center">
                                    <tr>
                                    <td><span class="badge p-2 loves">Loves</span></td>
                                    <td><span class="badge p-2 likes">Likes</span></td>
                                    <td><span class="badge p-2 dislikes">Dislikes</span></td>
                                    <td><span class="badge p-2 hates">Hates</span></td>
                                    </tr>
                                    <tr>
                                    <td><img src="img/${profileLoves}.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                        title="${profileLoves}"></td>
                                    <td><img src="img/${profileLikes}.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                        title="${profileLikes}"></td>
                                    <td><img src="img/${profileDislikes}.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                        title="${profileDislikes}"></td>
                                    <td><img src="img/${profileHates}.png" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                        title="${profileHates}"></td>
                                    </tr>
                                </table>
                                <div class="mt-5">
                                    <button onclick="signOut()" class="btn btn-secondary mb-0 w-100">Sign out</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>`
};


// SHOW JOIN FORM OR PROFILE
if (profileName) {
    joinArea.style.display = 'none';
    showProfile();
} else {
    joinArea.style.display = 'block';
}


// CLEAR LOCALSTORAGE ("SIGN OUT")
function signOut() {
    localStorage.clear();
    profileArea.style.display = 'none';
    joinArea.style.display = 'block';
}


// FILTER SINGLES BY GROUP
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