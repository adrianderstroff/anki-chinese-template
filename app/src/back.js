import {processTranslation, fillPinyin, addHRIfHintIsPresent, findTextNode} from './create';

let makeBack = () => {
    let translationText = document.getElementById('tl');
    translationText = findTextNode(translationText);

    if (translationText != undefined) {
        translationText = translationText.nodeValue;			
        processTranslation(translationText,'tl');
    }

    fillPinyin();
    addHRIfHintIsPresent();
}

export {makeBack};