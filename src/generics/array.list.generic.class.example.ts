import { cpus } from 'os';

class ArrayList<T> {
  private t = [];

  add(item: T) {
    this.t.push(item);
  }

  addToPosition(index: number, item: T) {
    const firstPart = this.t.slice(0, index);
    const secondPart = this.t.slice(index);
    this.t = [...firstPart, item, ...secondPart];
  }

  addAll(array: T[]) {
    this.t.push(...array);
  }

  clear() {
    this.t = [];
  }

  clone() {
    const cloned = new ArrayList<T>();
    cloned.addAll(this.t);
    return cloned;
  }

  contains(t: T) {
    return this.t.includes(t);
  }

  remove(t: T){
    const index = this.t.indexOf(t);
    this.removeFromIndex(index);
  }

  removeFromIndex(index){
    this.t.splice(index-1, 1);
  }

  size() {
    return this.t.length;
  }
}

const test = new ArrayList<string>();

//test.add(1); //error
test.add("a");
test.add("b");
test.add("c");
test.add("d");
test.add("e");

console.log(test);

//test.addToPosition(3, "f");
test.addAll(["l", "m", "n"]);
console.log(test);
console.log(test.contains("ž"));
test.removeFromIndex(2);
console.log(test);


/*
*
add(t: T)
add(index: number, t: T) <-- na specifican index
addAll() <-- accept array of T
clear() <-- remove all elements
clone() <-- return copy of ArrayList instance
containers(t: T) <-- check if containes
remove(t: T) <-- remove specific object
remove(index: number) <-- remove from specific index*/

