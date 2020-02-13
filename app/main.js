import {makeFront} from './src/front';
import {makeBack} from './src/back';

const cards = [
    {
        hanzi:       '我是从A來的.',
        pinyin:      'wo3 shi4 cong2 A lai2 de .',
        translation: 'Im from ... . ; I am from ...',
        hint:        'no hint here'
    }, {
        hanzi: '狼吞虎咽',
        pinyin: 'lang2 tun1 hu3 yan4',
        translation: 'to brush food away like a wolf',
        hint: ''
    }, {
        hanzi: '有的A,有的B',
        pinyin: 'you3 de A , you3 de B',
        translation: 'some ..., some ...',
        hint: ''
    }, {
        hanzi: '有的...,有的....',
        pinyin: 'you3 de ... , you3 de ... .',
        translation: 'some ..., some ...  ;   this is another line',
        hint: 'this is hint 1'
    }, {
        hanzi: '有的...',
        pinyin: 'you3 de ...',
        translation: 'v: this is a verb  ; n: this is a noun ; a: this is an adjective ; adv: this is an adverb ; mv: this is a measure word',
        hint: 'this is hint 1'
    }, {
        hanzi: '有的...',
        pinyin: 'you3 de ...',
        translation: 'v: this is a verb ; n: this is a noun ; mw: this a measure word ; adj: this an adjective ; adv: this an adverb',
        hint: ''
    }, {
        hanzi: '有的...',
        pinyin: 'you3 de ...',
        translation: 'this is a verb ; this is a noun ; this a measure word ; this an adjective ; this an adverb',
        hint: ''
    }
]
let insertCard = (c) => {
    document.getElementById('hz').innerHTML = c.hanzi;
    document.getElementById('py').innerHTML = c.pinyin;
    document.getElementById('tl').innerHTML = c.translation;
    document.getElementById('aw').innerHTML = c.hint;
}

document.addEventListener("DOMContentLoaded", function(event) {
    insertCard(cards[5]);
    makeFront();
    makeBack();
});
