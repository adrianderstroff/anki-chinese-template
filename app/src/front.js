import {createTemplate} from './create';
import {parse} from './parse';

let makeFront = () => {
    var hanziText = document.getElementById('hz').innerHTML;
    var pinyinText = document.getElementById('py').innerHTML;
    var words = parse(hanziText, pinyinText);
    createTemplate(words,'ch','hz','py');
}

export {makeFront};