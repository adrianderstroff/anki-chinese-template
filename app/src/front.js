import {createTemplate, findTextNode} from './create';
import {parse} from './parse';

let makeFront = () => {
    // find nodes
    var hanziText = document.getElementById('hz');
    var pinyinText = document.getElementById('py');

    // make sure to grab text nodes
    hanziText  = findTextNode(hanziText);
    pinyinText = findTextNode(pinyinText);
    hanziText  = (hanziText  === undefined) ? "" : hanziText.nodeValue;
    pinyinText = (pinyinText === undefined) ? "" : pinyinText.nodeValue;

    // parse words
    var words = parse(hanziText, pinyinText);

    // create template from the words
    createTemplate(words,'ch','hz','py');
}

export {makeFront};