// Creating an array with our Users names.
let users = ['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen'];

//For loop will loop them to the eng and print them one by one.
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// drawing line till length of our input.
function drawline(n) {
  let line = '';
  for (let i = 0; i < n; i++) {
    line = line + '\u{2501}';
  }
  return line;
}

// This function will draw Top line on our input.
function drawlineTop(n) {
  //for (let i = 0;)
    return '\u{250F}' + drawline(n) + '\u{2513}'
}
console.log(drawlineTop(10));




// This function will draw Middle line in between our inputs.
function drawlineMiddle(n) {
  return '\u{2523}' + drawline(n) + '\u{252B}'
}
console.log(drawlineMiddle(10));

// This function will draw Botom line under our input.
function drawlineBotom(n) {
  return '\u{2517}' + drawline(n) + '\u{251B}'
}
console.log(drawlineBotom(10));





// This function will draw Side line before and after our String.
// function drawbars(string) {
//   return '\u{2503}' + string + '\u{2503}'
// }
// console.log(drawbars());


//console.log(drawbars(users));

//console.log(drawline(10));

// for: -

// if (i = 0)

//   Top Border

// arr[i]

// drawlineMiddle

// if (i = arr.length)
//   arr[i]
// bottomborder




// console.log(drawlineMiddle(10))