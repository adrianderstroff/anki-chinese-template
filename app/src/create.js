import {makeTonemarks} from './tone';

if(window.savedPinyin === undefined) {
    window.savedPinyin = [];
}

// create the final template for hanzi and pinyin
let createTemplate = (words, resultId, hanziId, pinyinId) => {
    if(words) {
        // get root container
        let root = document.getElementById(resultId);
        let wrap = document.createElement('wrap');

        // reset saved pinyin
        window.savedPinyin = [];

        // for each word create a compound of hanzi and pinyin enclosed into
        // a colored block that reflects the respective tone
        for(var i = 0; i < words.length; i++) {
            // create block
            let charComp = document.createElement('character');

            // add special class when there are more than 4 characters
            let isSmallClass = (words.length > 5) ? " smaller" : ((words.length > 3) ? " small" : "");

            // create hanzi container
            let hanziComp = document.createElement('hanzi');
            hanziComp.innerHTML = words[i].hanzi;
            hanziComp.className = 'tone'+words[i].tone + isSmallClass;

            // create pinyin container
            let pinyinComp = document.createElement('pinyin');
            window.savedPinyin.push(makeTonemarks(words[i].pinyin, words[i].tone));
            pinyinComp.innerHTML = '&zwnj;'; // non printable character to preserve elements size
            pinyinComp.className = 'tone'+words[i].tone + isSmallClass;

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
    root.innerHTML = '';

    // split translation separated by semicolon into different divs
    let translations = text.split(';');
    if (translations != undefined) {
        // create table contents
        let tableData = [];
        for (let i = 0; i < translations.length; i++) {
            let text = translations[i].trim();
            
            let desc = findWordDescription(text);
            tableData.push(desc);
        }

        // create the actual table
        let table = createTable(tableData);
        root.appendChild(table);
    }
}

let createTable = (rowOfRows) => {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    for(let i = 0; i < rowOfRows.length; i++) {
        let row = rowOfRows[i];
        let trow = document.createElement('tr');
        for(let j = 0; j < row.length; j++) {
            let tdata = document.createElement('td');
            let node = row[j];
            tdata.appendChild(node);
            trow.appendChild(tdata);
        }
        tbody.appendChild(trow);
    }

    table.appendChild(tbody);
    return table;
}

// check if the line has a word description, if yes return that description and
// also remove that description from the line
let findWordDescription = (line) => {
    // input is empty
    if(line === null) 
        return [textNode(''), textNode('')];

    // divide line
    let tokens = line.split(' ');

    // no split lines
    if(tokens.length === 0) 
        return [textNode(''), textNode(line)];

    // check for the description
    let token = tokens[0];
    let description = undefined;
    if     (token.indexOf('adv:') !== -1) description = 'adv';
    else if(token.indexOf('adj:') !== -1) description = 'adj';
    else if(token.indexOf('mw:')  !== -1) description = 'mw';
    else if(token.indexOf('v:')   !== -1) description = 'verb';
    else if(token.indexOf('n:')   !== -1) description = 'noun';

    // no description found
    if(description === undefined)
        return [textNode(''), textNode(line)];
    
    let remainder = tokens.slice(1, line.length).join(' ');
    return [textNode('', 'desc '+description), textNode(remainder)];
} 

// creates a text node
let textNode = (text, className) => {
    let tn = document.createTextNode(text);

    // add wrapper to textNode if className is specified
    let result = tn;
    if(className !== undefined) {
        result = document.createElement('div');
        result.className = className;
        result.appendChild(tn);
    }

    return result;
}

// add pinyin to its dom elements
let fillPinyin = () => {
    let pinyinElements = document.getElementsByTagName('pinyin');
    for (let i = 0; i < pinyinElements.length; i++) {
        pinyinElements[i].innerHTML = window.savedPinyin[i];
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

        // split hints separated by ; into different divs
        let hints = aw.innerText.split(';');
        aw.innerHTML = "";
        if (hints != undefined) {
            for (let i = 0; i < hints.length; i++) {
                let hintDiv = document.createElement('div');
                hintDiv.innerHTML = hints[i].trim();
                aw.appendChild(hintDiv);
            }   
        }
    }
}

// searches for the first text node and returns it
let findTextNode = (node) => {
    // early stop when text node was found
    if(node.nodeType == Node.TEXT_NODE) return node;
    // early stop when node is undefined
    if(node === undefined)              return node;

    let children = node.childNodes;
    if(children === undefined) return undefined;

    for(let i = 0; i < children.length; i++) {
        let childNode = findTextNode(children[i]);
        if(childNode != undefined) return childNode;
    }

    return undefined;
}

export {createTemplate, processTranslation, fillPinyin, addHRIfHintIsPresent, findTextNode};