let me: string = "blake";
let numberFive: number = 5;
let myList: number[] = [1, 2, 3, 4, 5];
myList.push(5);

let userTwo: { name: string; age: number; email: string };
userTwo = { name: "Blake", age: 35, email: "blake@balke.com" };

function wordConcat(item1: string, item2: string): string {
  return item1 + item2;
}
wordConcat("blake", "lawrence");

let rhyme: string[] = ["fee", "fi", "fo", "fum"];
let reverseRhyme = rhyme.map((item) => item.split("").reverse().join(""));
