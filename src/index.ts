let firstName: string = "Mario";
let isFictional: boolean;

firstName = "Luigi";
isFictional = true;

//--------------------
// type inference (ts auto assigns the types - they are stil non changeable)
//--------------------
let planet = "earth";
let moons = 1;
let isLarge = true;
// planet = 10 (error)
// planet = "saturn" (fine)

//--------------------
// explicit type arrays
//--------------------
let names: string[] = ["blake", "luigi", "mario"];
let ages: number[] = [25, 28, 24];
names.push("helen");
ages.push(100);

//--------------------
// infered arrays (typescript will auto assign strings as the only type acceptable inside "fruits" array)
//--------------------
let fruits = ["apples", "mangos", "oranges"];
//fruits.push(23) flags error
//fruits.push("litchis") ✔️

//--------------------
// object literals (explicit)
//--------------------
let user: { firstName: string; age: number; id: number } = {
  firstName: "Blake",
  age: 35,
  id: 99,
};

// user.email = "blake1@blake.com" (property email does not exist)

//--------------------
// object literals (inference)
//--------------------
let person = { name: "Luigi", score: 35 };
// person.name = true (error)
