const date = new Date();

function season() {
	if(date.getMonth() + 1 === 3 || date.getMonth() + 1 === 4 || date.getMonth() + 1 === 4) {
    	return `Spring`;
    } else if(date.getMonth() + 1 === 6 || date.getMonth() + 1 === 7 || date.getMonth() + 1 === 8) {
    	return `Summer`;
    } else if(date.getMonth() + 1 === 9 || date.getMonth() + 1 === 10 || date.getMonth() + 1 === 11) {
    	return `Fall`;
    } else {
    	return `Winter`;
    }
};

function day() {
	if(date.getMonth === ) {
		return Math.floor(date.getDate() * (28 / 31));
    }
}



// document.getElementById("demo").innerHTML = `${season()} ${day()}`;