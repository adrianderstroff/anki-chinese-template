import {processTranslation, fillPinyin, addHRIfHintIsPresent} from './create';

let makeBack = () => {
    let translationText = document.getElementById('tl');
    if (translationText != null) {
        translationText = translationText.innerHTML;			
        processTranslation(translationText,'tl');
    }

    fillPinyin();
    addHRIfHintIsPresent();
}

export {makeBack};