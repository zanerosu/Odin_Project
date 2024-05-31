import { HashMap } from "./hashmap.js";
import { Tree, prettyPrint } from "./BST.js";

// let hashMap = new HashMap();
// hashMap.set("Zane", 23)
// hashMap.set("Zane", 230)
// hashMap.set("Bob", 45)
// hashMap.set("Jill", 54323)


// console.log(hashMap.get("Zane"));
// console.log(hashMap.has("Bob"));
// console.log(hashMap.length());


// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.entries());
// console.log(hashMap.findCurrentCapacity());

const sortedArray = [10, 11, 1, 2, 3, 4, 5, 7, 7, 8, 9];
let BST = new Tree(sortedArray);

console.log(BST)
prettyPrint(BST.root);

BST.insert(6);
prettyPrint(BST.root);

BST.delete(5);
prettyPrint(BST.root);

console.log(BST.find(12));
