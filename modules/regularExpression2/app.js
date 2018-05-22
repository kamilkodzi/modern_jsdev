let re;
// Literal Characters
re= /hello/;
re= /hello/i;

// Metacharacter Sybols
re=/^h/i;       // Must start with and case insensitive
re=/World$/i;   // Must start with and case insensitive
re=/^hello$/i;  // Must begin and end with
re=/^h.llo$/i;  // . Matches any ONE character
re=/h*llo/i;  // * Matches any character 0 or more times
re=/gre?a?y/i;  // ? optional character
re=/Gre?a?y\?/;  //  Escape character

// Brackets [] - Character Sets
re=/gr[ae]y/i;  // Must be an a or e
re=/[GF]ray/i;  // Must be an G or F 
re=/[^GF]ray/i;  // Match anything except G or F if we want that should start with F or G we have to move it before brackets-> ^[GF]
re=/[A-Z]ray/; // Match any uppercase letter
re=/[a-z]ray/; // Match any lowercase letter
re=/[A-Za-z]ray/; // Match any letter
re=/[0-9][0-9]ray/;  // Match any digit


// Braces {} - Quantifiers
re=/Hel{2,4}o/i;  // Must occur exacly {m} amount of times
re=/Hel{2,}o/i;  // Must occur at least {m} times

// Parentheses () - Grouping
re=/^([0-9]x){3}$/;



// Shorthand Character Classes
re=/\w/;   // Word character - alphanumeric (letter / number) or _
re=/\w+/;  // + = one or more
re=/\W/;  // Uppercase W - Non-Word character
re=/\d/;  // Match any digit
re=/\d+/;  // Match any digit 0 or more time
re=/\D/; // Match any Non-digit 
re=/\s/; // Match any whitespace char
re=/\S/; // Match any Non-whitespace char
re=/Hell\b/i;  // Word boundary - catch whole word not only part whith we`re looking for s Hello  <--  won`t be catched

// Assertions
re=/x(?=y)/;  // Match x only if followed by y
re=/x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str='sadsadsxdyasdas';


// Log Results
const result=re.exec(str);
console.log(result);


function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    }else{
        console.log(`${str} does NOT matched ${re.source}`);
    }
}

reTest(re,str);