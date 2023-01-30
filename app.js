let json = {
    "Key 1": {
        "Subkey 1": "Subvalue 1",
        "Subkey 2": "Subvalue 2",
        "Subkey 3": "Subvalue 3"
    },
    "Key 2": {
        "Subkey 4": "Subvalue 4",
        "Subkey 5": "Subvalue 5",
        "Subkey 6": "Subvalue 6"
    },
    "Key 3": {
        "Subkey 7": "Subvalue 7",
        "Subkey 8": "Subvalue 8",
        "Subkey 9": "Subvalue 9"
    }
};

let keys = Object.keys(json);
let randomKey = keys[Math.floor(Math.random() * keys.length)];
let randomSubkey = Object.keys(json[randomKey])[Math.floor(Math.random() * Object.keys(json[randomKey]).length)];

document.getElementById("hadith").innerHTML = `<p>${randomKey}: ${randomSubkey}:</p>`;
document.getElementById("hadithref").innerHTML = `<p>${json[randomKey][randomSubkey]}</p>`;
