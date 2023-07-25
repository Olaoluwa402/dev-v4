// regular expression

// create a new regex
//1. using  RegGex constructor
const { log } = console;

const pattern = /john/;
const flag = "ig";
const rg = RegExp(pattern, flag);
// log(rg);

//2. using double forward slashes
const reg = /john/gi;

// regex methods -
// test() => returns a boolen
// match() ==> returns an array of all matched result
//replace() => replaces the old substring with the new
// search() => returns the index ofthe search result if found but return -1 if not

// test()
const data =
  "Hacking is the act of identifying and then exploiting weaknesses in a computer system or network,hacking  usually to gain unauthorized access to personal or organizational data.";
//   test that the word hack is present in the given data

function testRecord(data, keyword) {
  const regx = new RegExp(keyword, "gi"); // /hack/gi
  if (regx.test(data)) {
    return `${keyword} is present`;
  } else {
    return `${keyword} is absent`;
  }
}

log(testRecord(data, "spam"));

// design a simple form with the following fields - username, email, password, confirm password
//validate the fields
//1. username must be present and must be a string
//2. email must be present and must be a valid email
//3. password must be present and greater that 4 characters
//4. confirm password must match the password field

// match()

const regMatched = data.match(/hack/gi);
log(regMatched);

// search()
const regSearched = data.search(/hack/gi);
log(regSearched);

const regReplace = data.replace(/hack/gi, "clean");
log(regReplace);

const data2 =
  "ygyutgutuy uytuytutu  \n hgfhgfhfhgfgh\n hggfghfhgfhghg iyty786868-0.\njhgjgj";

data2.match(/^jhgjgj/gi); //word starts the data
// log(data2.match(/jhgjgj$/gi));

data2.match(/[^0-9]/gi); //negation character search
// log(data2.match(/[^0-9]/gi));

// character search, []
const ap =
  "Apple is a nutritious fruit. In 20, 2023 apple supplies you with many APPLE anti-oxidants that helps remove toxins from the body";
ap.match(/[Aa]pple/);
log(ap.match(/[Aa]pple/g));

//  /d
log(ap.match(/\d+/g).toString());
