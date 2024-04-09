// Convert kilometers to miles.
const num = parseInt(prompt("Enter kilometers"));
const factor = 0.62;
const miles = num * factor;
const kilo = miles/factor;
document.write(`The ${num} kilometers in miles equal to:${miles}<br>`);
document.write(`The ${miles} mile in kilometers equal to:${kilo}`);