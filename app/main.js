import {makeFront} from './src/front';
import {makeBack} from './src/back';

const card = {
    hanzi:       '我是从A來的.',
    pinyin:      'wo3 shi4 cong2 A lai2 de .',
    translation: 'Im from ... . ; I am from ...',
    hint:        'no hint here'
}

let insertCard = (c) => {
    document.getElementById('hz').innerHTML = c.hanzi;
    document.getElementById('py').innerHTML = c.pinyin;
    document.getElementById('tl').innerHTML = c.translation;
    document.getElementById('aw').innerHTML = c.hint;
}

document.addEventListener("DOMContentLoaded", function(event) {
    insertCard(card);
    makeFront();
    makeBack();
});
