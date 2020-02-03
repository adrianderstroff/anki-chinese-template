// checks if a character is a chinese character
const isChineseCharacter = (char) => {
    let status = char.match(/[\u3400-\u9FBF]/);
    return status !== null;
}

// checks if character is a number
const isNumber = (char) => {
    return (char >= '0' && char <= '9');
}

// checks if character is a dot '.'
const isDot = (char) => {
    return char === '.'; 
}

// each chinese character is a chunk and a number of any other characters
// is also a chunk
const chunkHanzi = (hanziText) => {
    let chunks = [];
    let chunk = "";
    for (var i = 0; i < hanziText.length; i++) {
        // grab next character
        let char = hanziText.charAt(i);
        
        // either concatenate up to 3 dots or simply add character to the list
        if(isDot(char) && chunk.length < 3) {
            chunk += char;
        } else {
            if(chunk.length > 0) {
                chunks.push(chunk);
                chunk = "";
            }
            chunks.push(char);
        }
    }

    if (chunk.length !== 0) {
        chunks.push(chunk);
    }

    return chunks;
};

// a combination of latin characters plus a number at the end is a chunk
// alternatively a number of special characters are also a chunk
const chunkPinyin = (pinyinText) => {
    let chunks = pinyinText.split(' ');
    return chunks;
};

// split tone from pinyin
const splitPinyin = (pinyinChunk) => {
    let len = pinyinChunk.length;
    let pinyin = pinyinChunk;
    let tone = '5';

    if(isNumber(pinyinChunk[len-1])) {
        pinyin = pinyinChunk.slice(0, len-1);
        tone = pinyinChunk[len-1];
    }

    return {pinyin: pinyin, tone: tone};
}

// parse hanzi and pinyin texts into multiple words consisting of
// hanzi, pinyin and tone
const parse = (hanziText, pinyinText) => {
    // group texts into chunks
    let hanziChunks  = chunkHanzi(hanziText);
    let pinyinChunks = chunkPinyin(pinyinText);

    // make sure both chunks have the same size
    if(hanziChunks.length !== pinyinChunks.length) {
        let allHanziChunks = '"'+hanziChunks.join(',')+'"';
        let allPinyinChunks = '"'+pinyinChunks.join(',')+'"';
        let message = 'Length of hanzi and pinyin chunks do not match';
        let combinedMessage = message+' '+allHanziChunks+' '+allPinyinChunks;
        throw combinedMessage;
    }

    // turn chunks into words
    let words = [];
    for(let i = 0; i < hanziChunks.length; i++) {
        // grab hanzi, pinyin and tone and wrap it into a word
        let hanzi  = hanziChunks[i];
        let split  = splitPinyin(pinyinChunks[i]); 
        let pinyin = split.pinyin;
        let tone   = split.tone;

        words.push({hanzi: hanzi, pinyin: pinyin, tone: tone});
    }

    return words;
}

export {parse};