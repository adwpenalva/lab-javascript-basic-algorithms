// Iteration 1: Names and Input
console.log('I am ready!');

let hacker1 = 'Antonio';
console.log(`The driver's name is ${hacker1}.`);

/* could be 1) console.log("The driver's name is " + hacker1);
            2) console.log("The driver's name is %s", hacker1);
*/

let hacker2 = 'Diana';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let auxiliaryName = '';

for (let i = 0; i < hacker1.length; i++) {
  auxiliaryName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    auxiliaryName += ' ';
  }
}

console.log(auxiliaryName);

/* could be:
let alternativeAuxiliaryName = hacker1.toUpperCase().split('').join(' ');
console.log(alternativeAuxiliaryName);
*/

let auxiliaryReverseName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  auxiliaryReverseName += hacker2[i];
}

console.log(auxiliaryReverseName);

/* could be:
let alternativeAuxiliaryReverseName = hacker2.split('').reverse().join();
console.log(alternativeAuxiliaryReverseName)
*/

const comparisonOrder = hacker1.localeCompare(hacker2); // MDN localecompare

if (comparisonOrder < 0) {
  console.log('Yo, the navigator goes first definitely.');
} else if (comparisonOrder > 0) {
  console.log("The driver's name goes first.");
} else {
  console.log('What?! You both have the same name?');
}

// Bonus 1:

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis malesuada ex. In hac habitasse platea dictumst. Pellentesque vel eleifend neque, at interdum enim. In hac habitasse platea dictumst. Fusce pulvinar dictum congue. Nam aliquam vitae dolor eget ornare. Integer turpis felis, fermentum nec dictum sit amet, sagittis vel lectus. Sed sed eros justo. Curabitur sed eros nunc. Aenean quis commodo magna. Pellentesque quis consequat enim, quis rhoncus nisl. Aliquam luctus tincidunt sapien a imperdiet. Fusce commodo eleifend orci, et hendrerit nibh congue vitae. Vivamus tristique convallis justo dictum semper. Nam facilisis orci risus, sed luctus orci dignissim vitae. Proin quis bibendum massa, a mollis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ullamcorper, turpis sed tempor lacinia, dolor tortor viverra massa, vitae porta ligula elit eget erat. Proin quam magna, sodales non dui vitae, gravida sollicitudin orci. Vivamus aliquam magna id leo efficitur, nec elementum dolor pretium. Proin ultrices laoreet hendrerit. Curabitur finibus augue quam. Maecenas convallis, ex id ultrices sollicitudin, metus nisl elementum ipsum, eu eleifend odio est auctor tellus. Pellentesque vitae placerat erat, sit amet interdum erat. Vivamus quis enim eget elit maximus pharetra at non sem. Proin quis ex elit. Maecenas laoreet viverra diam sed porta. In ac nisl et nulla sollicitudin consequat ut at nisi. Etiam in leo at ipsum accumsan aliquam. Phasellus varius neque nec dapibus consequat. Nunc eget interdum turpis. Morbi pharetra ipsum id lobortis rutrum. Aliquam placerat lectus purus, at scelerisque quam convallis ut. Proin pellentesque risus ante, in sollicitudin ex egestas quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';

let wordCount = string => {
  let auxArray = string.split(' ');
  let etCounter = 0;
  console.log('Number of words in the string: ', auxArray.length);
  for (let i = 0; i < auxArray.length; i++) {
    if (auxArray[i] === 'et') {
      etCounter++;
    }
  }
  console.log("Number of 'et' words in the string: ", etCounter);
};

// Bonus 2:

let phraseToCheck = 'azaza azaza azaza';

let checkPalindrome = string => {
  let reverseString = string
    .split('')
    .reverse()
    .join('');
  if (reverseString === string) {
    return true;
  } else {
    return false;
  }
};
