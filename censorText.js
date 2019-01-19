var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
function censor(str){
    for (ind in censoredWords)
    {
        str = str.replace(censoredWords[ind],"****");
    }
    for(ind in customCensoredWords)
    {
        str = str.replace(customCensoredWords[ind],"****");
    }
    return str;
}

function addCensoredWords(word)
{
    customCensoredWords.push(str);
}
function getCensoredWords()
{
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;