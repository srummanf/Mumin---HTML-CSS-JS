let hadith = {
    "Sahih Bukari": {
        "8": `Narrated Ibn 'Umar:
        Allah's Messenger (ﷺ) said: Islam is based on (the following) five (principles):\n
        1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah's Messenger (ﷺ).\n2. To offer the (compulsory congregational) prayers dutifully and perfectly.\n3. To pay Zakat (i.e. obligatory charity) .\n
        4. To perform Hajj. (i.e. Pilgrimage to Mecca).\n5. To observe fast during the month of Ramadan.\n`,

        "Book 2, Hadith 3": `The Prophet (ﷺ) said, "A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden."`,
        "22": `The Prophet (ﷺ) said, "When the people of Paradise will enter Paradise and the people of Hell will go to Hell, Allah will order those who have had faith equal to the weight of a grain of mustard seed to be taken out from Hell. So they will be taken out but (by then) they will be blackened (charred). Then they will be put in the river of Haya' (rain) or Hayat (life) (the Narrator is in doubt as to which is the right term), and they will revive like a grain that grows near the bank of a flood channel. Don't you see that it comes out yellow and twisted"`,
        "33": `The Prophet (ﷺ) said, "The signs of a hypocrite are three:

        1. Whenever he speaks, he tells a lie.
        
        2. Whenever he promises, he always breaks it (his promise ).
        
        3. If you trust him, he proves to be dishonest. (If you keep something as a trust with him, he will not return it.)"`,
        "35": `Allah's Messenger (ﷺ) said, "Whoever establishes the prayers on the night of Qadr out of sincere faith and hoping to attain Allah's rewards (not to show off) then all his past sins will be forgiven."`,
        "38": `Allah's Messenger (ﷺ) said, "Whoever observes fasts during the month of Ramadan out of sincere faith, and hoping to attain Allah's rewards, then all his past sins will be forgiven."`,
        "39": `The Prophet (ﷺ) said, "Religion is very easy and whoever overburdens himself in his religion will not be able to continue in that way. So you should not be extremists, but try to be near to perfection and receive the good tidings that you will be rewarded; and gain strength by worshipping in the mornings, the afternoons, and during the last hours of the nights."`,
        "": ``,
    },
    // "Key 2": {
    //     "Subkey 4": ` Sahih al-Bukhari 8 Book 2, Hadith 1`,
    //     "Subkey 5": "Subvalue 5",
    //     "Subkey 6": "Subvalue 6"
    // },
    // "Key 3": {
    //     "Subkey 7": "Subvalue 7",
    //     "Subkey 8": "Subvalue 8",
    //     "Subkey 9": "Subvalue 9"
    // }
};

let ayah = {
    "Al Baqarah":{
        "21":`O mankind, worship your Lord, who created you and those before you, that you may become righteous `
    },
    "":{},
    "":{},
}

let dua = {
    "":{},
    "":{},
}




let keys = Object.keys(hadith);
let randomKey = keys[Math.floor(Math.random() * keys.length)];
let randomSubkey = Object.keys(hadith[randomKey])[Math.floor(Math.random() * Object.keys(hadith[randomKey]).length)];
document.getElementById("hadith").innerHTML = `<p>${randomKey}: ${randomSubkey}:</p>`;
document.getElementById("hadithref").innerHTML = `<p>${hadith[randomKey][randomSubkey]}</p>`;



let keys2 = Object.keys(ayah);
let randomKey2 = keys2[Math.floor(Math.random() * keys2.length)];
let randomSubkey2 = Object.keys(ayah[randomKey2])[Math.floor(Math.random() * Object.keys(ayah[randomKey2]).length)];
document.getElementById("ayah").innerHTML = `<p>${randomKey2}: ${randomSubkey2}:</p>`;
document.getElementById("ayahref").innerHTML = `<p>${ayah[randomKey2][randomSubkey2]}</p>`;


let keys3 = Object.keys(dua);
let randomKey3 = keys3[Math.floor(Math.random() * keys3.length)];
let randomSubkey3 = Object.keys(dua[randomKey3])[Math.floor(Math.random() * Object.keys(dua[randomKey3]).length)];
document.getElementById("dua").innerHTML = `<p>${randomKey3}: ${randomSubkey3}:</p>`;
document.getElementById("duaref").innerHTML = `<p>${dua[randomKey3][randomSubkey3]}</p>`;