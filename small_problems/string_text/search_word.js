// Problem: write a function that takes a string word and a string of text that
//          will search for the word in the string of text and return the number
//          for the amount of times the word is in the string of text.

// Rules: arguments will always be provided
//        all word breaks are spaces
//        seems to be not case sensitive

// Input: string word, string text
// Output: number

// Steps:

// filer over the string
// itterate over text.split and compare string word with current itteration text
// if found increment counter by 1
// return filter length

function searchWord(word, string) {
  return string.split(' ').filter(miniString => {
    return (word.toLowerCase() === miniString.toLowerCase());
  }).length
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord('sed', text));     // 4
console.log(searchWord('est', text));     // 0
console.log(searchWord('est,', text));    // 2