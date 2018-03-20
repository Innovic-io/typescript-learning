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

const listOfStrings = new ArrayList<string>();

//listOfStrings.add(1); //error
listOfStrings.add("a");
listOfStrings.add("b");
listOfStrings.add("c");
listOfStrings.add("d");
listOfStrings.add("e");

console.log(listOfStrings);

//listOfStrings.addToPosition(3, "f");
listOfStrings.addAll(["l", "m", "n"]);
console.log(listOfStrings);
console.log(listOfStrings.contains("ž"));
listOfStrings.removeFromIndex(2);
console.log(listOfStrings);


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

