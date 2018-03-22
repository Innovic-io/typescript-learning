/*//JSON: JavaScript Object Notation.
//JSON is a syntax for storing and exchanging data.
//JSON is text, written with JavaScript object notation.
//JSON is language independent */
/*
let myObj = { "name": "John", "age": 31, "city": "New York" };
let myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

*/

/*In JSON, values must be one of the following data types:

a string
a number
an object (JSON object)
an array
a boolean
null
*/
const objects = [{
  "_id": "s152d15eg",
  "type": "Chair",
  "relationships": [
    {
      "_id": "9988777766",
      "type": "RoomType"
    },
    {
      "_id": "665544332211",
      "type": "Room"
    }
  ],
  "properties": [
    {
      "definition": "2s64d56df",
      "value": {
        "current": "Kitchen"
      }
    },
    {
      "definition": "4dv5d4vd5",
      "value": {
        "current": 10.0
      }
    }
  ]
}, {
  "_id": "9988777766",
  "type": "RoomType",
  "properties": [
    {
      "definition": "2s64d56df",
      "value": {
        "current": "Kitchen Type"
      }
    },
    {
      "definition": "4dv5d4vd5",
      "value": {
        "current": 14
      }
    }
  ]
}, {
  "_id": "665544332211",
  "type": "Room",
  "properties": [
    {
      "definition": "2s64d56df",
      "value": {
        "current": "Kitchen Type Level 1"
      }
    },
    {
      "definition": "4dv5d4vd5",
      "value": {
        "current": 141
      }
    }
  ]
}];


// 1. loop trough array of objects
// 2. if object has relationships attribute, populate it


/*
const output = {
  "_id": "s152d15eg",
  "type": "Room",
  "RoomType": {
    "_id": "9988777766",
    "type": "RoomType",
    "properties": [
      {
        "definition": "2s64d56df",
        "value": {
          "current" : "Kitchen Type"
        }
      },
      {
        "definition": "4dv5d4vd5",
        "value": {
          "current": 14
        }
      }
    ]
  },
  "Room": {
    "_id": "665544332211",
    "type": "Room",
    "properties": [
      {
        "definition": "2s64d56df",
        "value": {
          "current" : "Kitchen Type Level 1"
        }
      },
      {
        "definition": "4dv5d4vd5",
        "value": {
          "current": 141
        }
      }
    ]
  },
  "properties": [
    {
      "definition": "2s64d56df",
      "value": {
        "current" : "Kitchen"
      }
    },
    {
      "definition": "4dv5d4vd5",
      "value": {
        "current": 10.0
      }
    }
  ]
};
*/


function objectParse() {
  for (let i = 0; i < objects.length; i++) {

    if (objects[i].relationships) {
      for (let j = 0; j < objects[i]["relationships"].length; j++) {

        const type = objects[i]["relationships"][j].type;
        const _id = objects[i]["relationships"][j]._id;

        const object = objects.find((value) => value.type === type && value._id === _id);
        objects[object.type] = object;
      }
    }
  }
}

objectParse();
console.log(objects);
