function splitAndMerge(str,sp) {
	return str.split('').join(sp);
}

function toCamelCase(str) {
    return str.split('-').map((element,index) => {
    	return index === 0 ? element : element.replace(element[0],element[0].toUpperCase());
    }).join('_');
}
