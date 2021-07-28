const date = new Date();

function season() {
    if (date.getMonth() + 1 === 3 || date.getMonth() + 1 === 4 || date.getMonth() + 1 === 5) {
        return `Spring`;
    } else if (date.getMonth() + 1 === 6 || date.getMonth() + 1 === 7 || date.getMonth() + 1 === 8) {
        return `Summer`;
    } else if (date.getMonth() + 1 === 9 || date.getMonth() + 1 === 10 || date.getMonth() + 1 === 11) {
        return `Fall`;
    } else {
        return `Winter`;
    }
};

function day() {
    if (date.getMonth === 3 || date.getMonth === 5 || date.getMonth === 8 || date.getMonth === 10) {
        if (Math.floor(date.getDate() * (28 / 30)) > 0) {
            return Math.floor(date.getDate() * (28 / 30));
        } else {
            return 1;
        }
    } else if (date.getMonth === 1) {
        if (date.getDate() === 29) {
            return 28;
        } else {
            return date.getDate();
        }
    } else {
        if (Math.floor(date.getDate() * (28 / 31)) > 0) {
            return Math.floor(date.getDate() * (28 / 31));
        } else {
            return 1;
        }
    }
}


//GET DAY NUMBER & CONVERT TO SDV TIME
//const dayNumber = Math.ceil((date - new Date(date.getFullYear(),0,1)) / 86400000);
//divide dayNumber by 3.25 to get SDV day number


//COUNTDOWN TO DANCE OF THE JELLIES
const eventDate = new Date("September 19, 2021");
const eventName = "the Dance of the Jellies";
const diff = eventDate.getTime() - date.getTime();
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

function countdown() {
    if (days > 1) {
        return `There are ${days + 1} days until ${eventName}.`;
    } else if (days == 1) {
        return `There are only two days left until ${eventName}!`;
    } else if (days == 0) {
        return `Tomorrow is ${eventName}!`;
    } else {
        return `${eventName} is today!`;
    }
}

document.getElementById("countdown").innerHTML = `Today is ${season()} ${day()}. ${countdown()}`;