const date = new Date();

//GET DAY NUMBER (DIVIDE BY 3.25 TO CONVERT TO SDV)
const dayNumber = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 86400000);

function getSeason() {
    if (dayNumber >= 60 && dayNumber <= 152) {
        return `Spring`;
    } else if (dayNumber >= 153 && dayNumber <= 244) {
        return `Summer`;
    } else if (dayNumber >= 245 && dayNumber <= 335) {
        return `Fall`;
    } else if (dayNumber >= 336 || dayNumber <= 59) {
        return `Winter`;
    }
};

const eventDate = new Date("September 19, 2021");
const eventName = "Dance of the Jellies";
const daysLeft = Math.ceil((eventDate - date) / 86400000);

function countdown() {
    if (daysLeft > 2) {
        return `There are ${daysLeft} days until the ${eventName}.`;
    } else if (daysLeft == 2) {
        return `Only 2 days left until the ${eventName}!`;
    } else if (daysLeft == 1) {
        return `Tomorrow is the ${eventName}!`;
    } else {
        return `The ${eventName} is today!`;
    }
}

document.getElementById("countdown").innerHTML = `It's ${getSeason()}. ${countdown()}`;