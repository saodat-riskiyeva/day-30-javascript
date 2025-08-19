let age = 43;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Software Engineer",
  place: "New York",
  salary: 120000,
};

let adultYears;

function calculateAdultYears(age) {
  adultYears = age - 18;
  alert(adultYears);
}
calculateAdultYears(age);

age = 22;
calculateAdultYears(age);
