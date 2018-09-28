/*
() - true
{[()]} - true
{[()] - false
{}[]() - true
([]) - true
(] - false
*/

let isStrCorrect = (str) => {
	if(str.length % 2 !== 0)
		return false;

	const chars = ['()', '[]', '{}'] ;
	const regexes = [/{}/g, /(\[\])/g, /(\(\))/g];
	let aux = str;

	chars.forEach((char) => {
	    while(aux.includes(char))
	        regexes.forEach(regex => aux = aux.replace(regex, ''));
	});

	return !aux.length;
};
