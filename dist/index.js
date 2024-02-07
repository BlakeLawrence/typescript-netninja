"use strict";
let firstName = "Mario";
let isFictional;
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
let names = ["blake", "luigi", "mario"];
let ages = [25, 28, 24];
names.push("helen");
ages.push(100);
//--------------------
// infered arrays (typescript will auto assign strings as the only type acceptable inside "fruits" array)
//--------------------
let fruits = ["apples", "mangos", "oranges"];
//fruits.push(23) flags error
//fruits.push("litchis") ✔️
//--------------------
// object literals
//--------------------
