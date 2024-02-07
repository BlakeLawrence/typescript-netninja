let firstName: string = "Mario";
let isFictional: boolean;

firstName = "Luigi";
isFictional = true;

// type inference (ts auto assigns the types - they are stil non changeable)
let planet = "earth";
let moons = 1;
let isLarge = true;
// planet = 10 (error)
// planet = "saturn" (fine)
