// 1
function splitAndMerge(str,sp) {
	return str.split('').join(sp);
}

// 3
function toCamelCase(str) {
    return str.split('-').map((element,index) => {
    	return index === 0 ? element : element.replace(element[0],element[0].toUpperCase());
    }).join('_');
}

// 4
function reverseWordsInSentence(str) {
    return str.split(' ').map((element) => {
        return element.split('').reverse().join('');
    }).join(' ');
}
