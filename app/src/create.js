import {makeTonemarks} from './tone';

let savedPinyin = [];

// create the final template for hanzi and pinyin
let createTemplate = (words, resultId, hanziId, pinyinId) => {
    if(words) {
        // get root container
        let root = document.getElementById(resultId);
        let wrap = document.createElement('wrap');

        // for each word create a compound of hanzi and pinyin enclosed into
        // a colored block that reflects the respective tone
        for(var i = 0; i < words.length; i++) {
            // create block
            let charComp = document.createElement('character');
            //let colors = getToneColor(words[i].tone);

            // create hanzi container
            let hanziComp = document.createElement('hanzi');
            hanziComp.innerHTML = words[i].hanzi;
            //hanziComp.style.background = colors.hanzi;
            hanziComp.className = 'tone'+words[i].tone;

            // create pinyin container
            let pinyinComp = document.createElement('pinyin');
            savedPinyin.push(makeTonemarks(words[i].pinyin, words[i].tone));
            pinyinComp.innerHTML = '&zwnj;'; // non printable character to preserve elements size
            //pinyinComp.style.background = colors.pinyin;
            pinyinComp.className = 'tone'+words[i].tone;

            // add hanzi and pinyin to block
            charComp.appendChild(hanziComp);
            charComp.appendChild(pinyinComp);
            // add block into the wrap container
            wrap.appendChild(charComp);
            root.appendChild(wrap);
        }

        // remove the plain hanzi and pinyin texts
        document.getElementById(hanziId).outerHTML = '';
        document.getElementById(pinyinId).outerHTML = '';
    }
}

// split translations with regards to a semicolon divider
let processTranslation = (text, translationId) => {
    // clear translation
    let root = document.getElementById(translationId);
    document.getElementById(translationId).innerHTML = '';

    // split translation separated by semicolon into different divs
    let translations = text.split(';');
    if (translations != null) {
        for (let i = 0; i < translations.length; i++) {
            let translationDiv = document.createElement('div');
            translationDiv.innerHTML = translations[i];
            root.appendChild(translationDiv);
        }   
    }
}

// add pinyin to its dom elements
let fillPinyin = () => {
    let pinyinElements = document.getElementsByTagName('pinyin');
    for (let i = 0; i < pinyinElements.length; i++) {
        pinyinElements[i].innerHTML = savedPinyin[i];
    }
}

// checks if a hint is present and adds a ruler between translation and hint
let addHRIfHintIsPresent = () => {
    // check if hint is not empty
    let content = document.getElementById('aw');
    if(content.childNodes.length > 0) {
        // add ruler before hint
        let hr = document.createElement('hr');
        let aw = document.getElementById('aw');
        let parent = aw.parentNode;
        parent.insertBefore(hr, aw);
    }
}

// set a debug message
let debug = (text) => {
    document.getElementById('db').innerHTML += text+"<br>";
}

export {createTemplate, processTranslation, fillPinyin, addHRIfHintIsPresent};