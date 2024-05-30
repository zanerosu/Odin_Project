import { HashMap } from "./hashmap.js";

let hashMap = new HashMap();
hashMap.set("Zane", 23)
hashMap.set("Zane", 230)
hashMap.set("Bob", 45)
hashMap.set("Jill", 54323)


console.log(hashMap.get("Zane"));
console.log(hashMap.has("Bob"));
console.log(hashMap.length());


console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
console.log(hashMap.findCurrentCapacity());