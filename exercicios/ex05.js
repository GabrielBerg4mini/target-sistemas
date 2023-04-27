let originalString = "batata"
let reversedString = "";

for ( let i = 0; i < originalString.length; i++) {
    reversedString = originalString[i] + reversedString;
}
console.log(reversedString)