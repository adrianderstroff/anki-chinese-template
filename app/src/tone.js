const vocalMap = {
    "a": { priority: 1, tone: { "1": "&#257;", "2": "&#225;", "3": "&#462;", "4": "&#224;", "5": "a" }},
    "e": { priority: 2, tone: { "1": "&#275;", "2": "&#233;", "3": "&#283;", "4": "&#232;", "5": "e" }},
    "o": { priority: 3, tone: { "1": "&#333;", "2": "&#243;", "3": "&#466;", "4": "&#242;", "5": "o" }},
    "u": { priority: 4, tone: { "1": "&#363;", "2": "&#250;", "3": "&#468;", "4": "&#249;", "5": "u" }},
    "i": { priority: 4, tone: { "1": "&#299;", "2": "&#237;", "3": "&#464;", "4": "&#236;", "5": "i" }},
    "v": { priority: 4, tone: { "1": "&#470;", "2": "&#472;", "3": "&#474;", "4": "&#476;", "5": "&#252;" }}
}

// get a vocals priority
let getVocalPriority = (char) => {
    let priority = vocalMap[char];
    priority = (priority != null) ? priority.priority : 5;
    return priority;
}

// get the tone marks over the right vocal
let getCharWithTone = (char, tone) => {
    let charWithTone = "";
    
    // get character information from the vocal map
    let charObj = vocalMap[char];

    // if we have vocal we get its tone mark depending on the tone number 1-5
    if (charObj != null) {
        let toneObj = charObj.tone[tone];
        charWithTone = (toneObj != null) ? toneObj : charObj[5];
    } 
    // else we get the vocal without the tone mark
    else {
        charWithTone = char;
    }
    return charWithTone;
}

// returns the word with a tone mark added to the right vocal
let makeTonemarks = (word, tone) => {
    let wordWithTones = word;

    // determine the index of the vocal of highest priority (lowest number)
    let highestPriority = 6;
    let idx = -1;
    for (var i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        let priority = getVocalPriority(char);
        if (priority < highestPriority) {
            highestPriority = priority;
            idx = i;
        }
    }

    // if an index had been found add a tone mark to that vocal
    if (idx !== -1) {
        let char = word.charAt(idx);
        let charWithTone = getCharWithTone(char, tone);
        wordWithTones = word.replace(char,charWithTone);
    }
    return wordWithTones;
}

export {makeTonemarks};