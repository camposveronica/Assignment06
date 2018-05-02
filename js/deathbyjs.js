/*eslint-env browser*/
//STEP 1

var alphabetical = function (str) {
    "use strict";
    var i, letters = [];
    for (i = 0; i < str.length; i += 1) {
        letters[i] = str.charAt(i);
    }
    letters = letters.sort();
    return letters;
    
};
//STEP 2
var toCapital = function (str) {
    "use strict";
    var i, words;
    words = str.split(" ");
    for (i = 0; i < words.length; i += 1) {
        words[i] = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase());
    }
    return words;
    
};
//STEP 3
var countVowels = function (str) {
    "use strict";
    var vowels = str.match(/[aeiou]/gi);
    var i = vowels.length;
    window.console.log(i);
    return i;
};

//STEP 4
var randomChar = function (l) {
    "use strict";
    var i;
    var strid = "";
    var str = "";
    while (l > 0) {
        i = Math.random() * 256;
        //window.console.log(i);
        strid = String.fromCharCode(Math.floor(i));
        //window.console.log(strid);
        var strmatch = strid.match(/[a-z]|[0-9]/gi);
        if (strmatch !== null) {
            str += strid;
            l -= 1;
        }
    }
    return str;
};
//STEP 5

var longestCountryName = function (str) {
    "use strict";
    var names = str.split(",");
    //window.console.log(names);
    var i, max = 0, pos;
    for (i = 1; i <= names.length - 1; i += 1) {
        if (names[i - 1].length > names[i].length) {
            if (names[i - 1].length > max) {
                max = names[i - 1].length;
                pos = i - 1;
            }
        } else {
            if (names[i].length > max) {
                max = names[i].length;
                pos = i;
            }
        }
    }
    return names[pos];
    
};


//alphabetical("webmaster");
//toCapital("the quick brown fox");
//countVowels("ana ene");
//randomChar(8);
//longestCountryName("Australia, Germany, United States of America");