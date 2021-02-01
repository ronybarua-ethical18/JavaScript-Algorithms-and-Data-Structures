// Regular Expression-JavaScript

//C1 Regular Expressions: Using the Test Method

/* Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not. */

let testString = 'fullstackwebdeveloper';
let testing = /webdeveloper/;
let resulting = testing.test(testString);

//-------------------------------------------------------------------------------------

// C2. Match a Literal String with Different Possibilities---------------------------------
// . You can search for multiple patterns using the alternation or OR operator |:
let literal = "I want to become a data scientist";
let checking = /data|scientist/;
let letsSee = checking.test(literal);

//-------------------------------------------------------------------------------------

// C3.Ignore Case While Matching using i flag---------------------------------------

let matchCases = "There is an Example of Beauty";
let anycase = /example|beauty/i;
let res = anycase.test(matchCases);

//-------------------------------------------------------------------------------------

//C4. Extract Matches------------------------
// match method return an array containing all matches
// this is the opposite of test method
let actualMatch = "Regular Expression";
// i flag is used to match all cases strings
let matchThis = /expression/i;
let results = actualMatch.match(matchThis);
// console.log(results);

//-------------------------------------------------------------------------------------
// C5.Find More Than the First Match

let moreStrings = "repeat Repeat repeat";
let checkString = /repeat/gi;
let output = moreStrings.match(checkString);
// console.log(output);

//-------------------------------------------------------------------------------------

// C6.Match Anything with Wildcard Period .
// if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
let celebrate = "hurray, humble, hurry up, hum, huh!";
let wildCard = /hu./;
let wildchecking = wildCard.test(celebrate);
// console.log(wildchecking);

//-------------------------------------------------------------------------------------

// C7.Match Single Character with Multiple Possibilities and character class[]------------------

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
let cat = catStr.match(bgRegex);
let bat = batStr.match(bgRegex);
let mat = matStr.match(bgRegex);
// console.log(cat, bat, mat);

/* let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex);  */

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let resultings = quoteSample.match(alphabetRegex);

//-------------------------------------------------------------------------------------

// C9.Match Numbers and Letters of the Alphabet---------------------------------

/* Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5. */

let letterNumber = "rony2345";
let checkit = /[a-z0-9]/ig;
let seeResult = letterNumber.match(checkit);
// console.log(seeResult);

//-------------------------------------------------------------------------------------

// C10.Match Single Characters Not Specified with negated character set------------------------

/* To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters. */

let quoteSamples = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let resulted = quoteSamples.match(myRegex);

//-------------------------------------------------------------------------------------

// C11.Match Characters that Occur One or More Times-------------------------
/* You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"]. */

let checkConsecutive = "Misssssssmadona";
let checkitOut = /s+/g;
let outcome = checkConsecutive.match(checkitOut);
// console.log(outcome);

// Match Characters that Occur Zero or More Times---------------------

// * is used to matches characters that occur zero or more times.
let occur = "goooooooooal";
let gPhrase = "gun sniper";
let oPhrase = "over the moon";
let goPhrase = /go*/;
/* console.log(occur.match(goPhrase));
console.log(gPhrase.match(goPhrase));
console.log(oPhrase.match(goPhrase));
 */
//-------------------------------------------------------------------------------------

// C12. Find Characters with Lazy Matching

/* In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].


 */
/* let text = "<h1>Winter is coming</h1>";
let myRegexs = /<.*?>/; // Change this line
let resultingse = text.match(resultingse); */

//-------------------------------------------------------------------------------------

// C13.Match Beginning String Patterns

/* In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings. */

// here ^ is used to match the string in the beginning
let beginning = "jackson rony";
let search = /^rony/;
let searching = search.test(beginning);
// console.log(searching);


// Match Ending String Patterns----------------------------------
// You can search the end of strings using the dollar sign character $ at the end of the regex.

let str1 = "jackson rony";
let str2 = /rony$/;
let str3 = str2.test(str1);
// console.log(str3);

//-------------------------------------------------------------------------------------
//C14. Match All Letters and Numbers with \w -----------------------------------------
/* The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_). */

let longhand = /[A-Za-z0-9_+]/;
let shorthand = /\w+/;
let try1 = "42";
let try2 = "hello_world";
let tryLong = longhand.test(try1);
let tryShort = shorthand.test(try1);
let tryLong2 = longhand.test(try2);
let tryShort2 = shorthand.test(try2);
// console.log(tryLong, tryShort, tryLong2, tryShort2);


// Match Everything But Letters and Numbers----------------------------------------
/* You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]. */

let shortcode = /\W/;
// let shortcode = /[^A-Za-z0-9_]/;
let try3 = "25%";
let try4 = "ohmygod!";
/* console.log(shortcode.test(try3));
console.log(shortcode.test(try4));
console.log(try3.match(shortcode));
console.log(try4.match(shortcode)); */

// Match All Numbers---------------------------------------------------
/* The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine. */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let outputs = movieName.match(numRegex).length;
// console.log(outputs);

// Match all non numbers---------------------------------------------------
/* The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine. */

let moviesName = "2001: A Space Odyssey";
let numRegexs = /\D/g;
let outpass = moviesName.match(numRegexs).length;
// console.log(outpass);


// Restrict Possible Usernames----------------------------------------

let usersname = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let resultCheck = userCheck.test(usersname);
// console.log(resultCheck)

// Match Whitespace-----------------------
/* ou can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
let spaceWhite = whiteSpace.match(spaceRegex);
// console.log(spaceWhite);


// Match Non-Whitespace Characters
let whiteSpace2 = "Whitespace. Whitespace everywhere!"
let spaceRegex2 = /\S/g;
let spaceWhite2 = whiteSpace2.match(spaceRegex2).length;
console.log(spaceWhite2);

//-------------------------------------------------------------------------------------

//C16. Specify Upper and Lower Number of Matches------------------------------------------

/* Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns. */

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false


// Specify Only the Lower Number of Matches------------------------------

/* For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/. */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let resulter = haRegex.test(haStr);


// Specify Exact Number of Matches------------------------------------------

/* To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/. */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let resul = timRegex.test(timStr);


// Check for All or None----------------------------------------------

/* You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings. */

let american = "color";
let british = "colour";
let existence = /colou?r/;
let check1 = existence.test(american);
let check2 = existence.test(british);
// console.log(check1, check2);
//-------------------------------------------------------------------------------------


// Positive and Negative Lookahead------------------------------------------------

/* Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present. */

let password = "123abc";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// console.log(checkPass.test(password));

//-------------------------------------------------------------------------------------------

// C17.Check For Mixed Grouping of Characters------------------------------------------

/* Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses().
If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g */

let groupChar = "Humpty";
let checkGroup = /H(ump)ty/g;
let checkGroup1 = checkGroup.test(groupChar);
// console.log(checkGroup1);

// Check For Mixed Grouping of Characters--------------------------------------
let myString = "Eleanor Roosevelt";
let myRegex1 = /(Franklin D.|Eleanor) Roosevelt/g; 
let resulth = myRegex1.test(myString);


// Reuse Patterns Using Capture Groups-----------------------------------------------------
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let resulty = reRegex.test(repeatNum);

//-------------------------------------------------------------------------------------------

//C18. Use Capture Groups to Search and Replace----------------------------------------

/* Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something. */

let wrongText = "the sky is green";
let replaceWord = /green/;
let finalWord = wrongText.replace(replaceWord, "blue");
// console.log(finalWord);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

//-----------------------------------------------------------------------
// C22.remove whitespace from start and end
/* Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions. */

let hello = "   Hello, World!  ";
let wsRegex = /\s\s+/g;
let result = hello.replace(wsRegex, "");