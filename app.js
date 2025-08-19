let age = 43;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Software Engineer",
  place: "New York",
  salary: 120000,
};

function calculateAdultYears(age) {
  alert(age - 18);
}

calculateAdultYears(age);

age = 22;
calculateAdultYears(age);

// ++ (e.g. age++): Shorthand notation for age = age + 1 (increment a value stored in a variable by 1 and store it back into that variable)

// -- (e.g. age--): Shorthand notation for age = age - 1 (decrement a value stored in a variable by 1 and store it back into that variable)

// ** (e.g. age = 4 ** 3): Exponentiation operator (i.e. replacement for age = 4 * 4 * 4)

// += (e.g. age += 2): Shorthand notation for age = age + 2 (increase a value stored in a variable and store it back into that variable)

// -= (e.g. age -= 2): Shorthand notation for age = age - 2 (decrease a value stored in a variable and store it back into that variable)

// *= (e.g. age *= 2): Shorthand notation for age = age * 2 (multiply a value stored in a variable and store it back into that variable)

// /= (e.g. age /= 2): Shorthand notation for age = age / 2 (divide a value stored in a variable and store it back into that variable)

// %= (e.g. age %= 2): Shorthand notation for age = age % 2 (modulus operator, which gives the remainder of a division operation and stores it back into that variable)

// && (e.g. age > 18 && age < 65): Logical AND operator (returns true if both conditions are true)

// || (e.g. age < 18 || age > 65): Logical OR operator (returns true if at least one condition is true)

// ! (e.g. !isAdult): Logical NOT operator (returns true if the condition is false, and vice versa)

// ? (e.g. isAdult ? "Yes" : "No"): Ternary operator (shorthand for if-else, returns the first value if the condition is true, otherwise the second value)
