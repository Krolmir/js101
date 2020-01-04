let advice = "Few things in life are as important as house training your pet important dinosaur.";

// return a new string that replaces important with urgent *all occurences

let regex = /important/gi;

function replaceString(string) {
  return string.replace(regex, 'urgent');
}

console.log(replaceString(advice));