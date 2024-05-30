import { LinkedList } from "./linkedlist.js";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.50) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    let index = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      index = hashCode % this.buckets.length;
    }
    return index;
  }

  set(key, value) {
    let currentCapacity = this.findCurrentCapacity() / this.buckets.length;
    if (currentCapacity >= this.loadFactor) {
      this.capacity *= 2;
      const oldBuckets = this.buckets;
      this.buckets = new Array(this.capacity)
        .fill(null)
        .map(() => new LinkedList());

      for (const oldBucket of oldBuckets){
        let entries = oldBuckets.entries();
        for (let entry of entries){
          const [oldKey, oldValue] = entry;
          const newBucketIndex = this.hash(oldKey);
          this.buckets[newBucketIndex].append(oldKey, oldValue);
        }
      }
    }

    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    bucket.append(key, value);
    console.log(this.buckets);
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    if (bucket.size === 0) {
      return null;
    } else {
      return bucket.find(key);
    }
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    if (bucket.find(key)) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    if (bucket.find(key)) {
      bucket.pop(key);
      return true;
    } else {
      return false;
    }
  }

  length() {
    let sum = 0;
    this.buckets.forEach((bucket) => {
      let currBucket = bucket.getKeys();
      sum += currBucket.length;
    });
    return sum;
  }

  clear() {
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
    console.log(this.buckets);
  }

  keys() {
    const allKeys = [];
    this.buckets.forEach((bucket) => {
      let bucketKeys = bucket.getKeys();
      bucketKeys.forEach((key) => {
        allKeys.push(key);
      });
    });
    return allKeys;
  }

  values() {
    const allValues = [];
    this.buckets.forEach((bucket) => {
      let bucketValues = bucket.getValues();
      bucketValues.forEach((value) => {
        allValues.push(value);
      });
    });
    return allValues;
  }

  entries() {
    const allEntries = [];
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        allEntries.push([bucket.head.key, bucket.head.value]);
      }
    });
    return allEntries;
  }

  findCurrentCapacity() {
    let bucketCount = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].head) {
        bucketCount++;
      }
    }
    return bucketCount;
  }
}
