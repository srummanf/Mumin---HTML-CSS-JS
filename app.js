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
        "5009": `Narrated Abu Mas'ud:

        The Prophet (ﷺ) said, "If somebody recited the last two Verses of Surat Al-Baqara at night, that will be sufficient for him."`,

    },
};

let ayah = {
    "Al Baqarah": {
        "21": `O mankind, worship your Lord, who created you and those before you, that you may become righteous `,
        "156": `Who, when disaster strikes them, say, "Indeed we belong to Allāh, and indeed to Him we will return."`
    },
    "Ad Duha": {
        "4": `Indeed what is to come will be better for you than what has gone by.`,
        "7": `And He found you lost and guided [you],`
    },
    "At Taubah": {
        "4": `Do not grieve; indeed Allāh is with us.`,
    },
}

let dua = {
    "Jami'at Tirmidhi": {
        "3524": `Anas bin Malik said:
        “Whenever a matter would distress him, the Prophet (ﷺ) would say: ‘O Living, O Self-Sustaining Sustainer! In Your Mercy do I seek relief (Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth).’” And with this chain, 
        that he said: “The Messenger of Allah (ﷺ) said: ‘Be constant with: “O Possessor of Majesty and Honor (Yā Dhal-Jalāli wal-Ikrām).’”`,
        "3460": `Abdullah bin Amr narrated that :
        the Messenger of Allah (ﷺ) said: “there is not anyone upon the earth who says: ‘None has the right to be worshipped but Allah, and Allah is the Greatest, and there is no might nor power except by Allah, (Lā ilāha illallāh, wa Allāhu akbar, wa lā ḥawla wa lā quwwata illā billāh) except that his sins shall be pardoned, even if they were like the foam of the sea.”`
    },
    "Sahih Bukhari": {
        "6325": `Narrated Abu Dhar:
        Whenever the Prophet (ﷺ) lay on his bed, he used to say: "Allahumma bismika amutu wa ahya," and when he woke up he would say: "Al-hamdu lil-lahilladhi ahyana ba'da ma an atana, wa ilaihi an-nushur."`
    },
}




let keys = Object.keys(hadith);
let randomKey = keys[Math.floor(Math.random() * keys.length)];
let randomSubkey = Object.keys(hadith[randomKey])[Math.floor(Math.random() * Object.keys(hadith[randomKey]).length)];
document.getElementById("hadith").innerHTML = `<p p > ${randomKey}: ${randomSubkey}:</p> `;
document.getElementById("hadithref").innerHTML = `<p p > ${hadith[randomKey][randomSubkey]}</p > `;



let keys2 = Object.keys(ayah);
let randomKey2 = keys2[Math.floor(Math.random() * keys2.length)];
let randomSubkey2 = Object.keys(ayah[randomKey2])[Math.floor(Math.random() * Object.keys(ayah[randomKey2]).length)];
document.getElementById("ayah").innerHTML = `<p p > ${randomKey2}: ${randomSubkey2}:</p > `;
document.getElementById("ayahref").innerHTML = `<p p > ${ayah[randomKey2][randomSubkey2]}</p > `;


let keys3 = Object.keys(dua);
let randomKey3 = keys3[Math.floor(Math.random() * keys3.length)];
let randomSubkey3 = Object.keys(dua[randomKey3])[Math.floor(Math.random() * Object.keys(dua[randomKey3]).length)];
document.getElementById("dua").innerHTML = `<p p > ${randomKey3}: ${randomSubkey3}:</p > `;
document.getElementById("duaref").innerHTML = `<p p > ${dua[randomKey3][randomSubkey3]}</p > `;