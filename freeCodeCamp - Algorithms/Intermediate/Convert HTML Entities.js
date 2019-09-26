/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

const convertHTML = str => {
    const entitiesMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&apos;',
        '"': '&quot;'
    };
    const entities = Object.keys(entitiesMap);
    let newStr = str;
    entities.forEach(e => {
 		     newStr = newStr.replace(new RegExp(e, "gi"), entitiesMap[e]);
    	});

    return newStr;
};

console.log(convertHTML("Dolce & Gabbana") === 'Dolce &amp; Gabbana');
console.log(convertHTML("Hamburgers < Pizza < Tacos") === 'Hamburgers &lt; Pizza &lt; Tacos');
console.log(convertHTML("Sixty > twelve") === 'Sixty &gt; twelve');
console.log(convertHTML('Stuff in "quotation marks"') === 'Stuff in &quot;quotation marks&quot;');
console.log(convertHTML("Shindler's List") === 'Shindler&apos;s List');
console.log(convertHTML("<>") === '&lt;&gt;');
console.log(convertHTML("abc") === 'abc');
