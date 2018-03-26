// import data from data.js
// make functions which collect all available tags
// make function which return only active users
// make function which returns trimmed response, for given input

// trimUsers(['guid','name', 'gender')
//
// return array of users with only above fields:
/*

[
  {
    "guid": "c71a9c74-679f-4165-8a85-8f7020a9194c",
    "name": "Letha Fletcher",
    "gender": "female",
   },
   {
    "guid": "c71a9c74-679f-4165-8a85-8f7020a9194c",
    "name": "Letha Fletcher",
    "gender": "female",
   }
]

 */


const data = require("./data").data;

function getAvailableTags(data) {

    let tags = [];
    data.forEach(value => {
        value.tags.forEach(tag => {
            if (!(tags.includes(tag)))
                tags.push(tag);
        });
    });
    //console.log(tags.length);
    return tags;

}

//console.log(data);
//console.log(getAvailableTags(data));

function getActiveUsers(data) {
    return data.filter(value => value.isActive);
}


//console.log(getActiveUsers(data));

function trimUsers(data, selection) {
    const trimmed = [];

    data.forEach(object => {

        let user = {};

        selection.forEach(selected => {
            user[selected] = object[selected];
        });

        trimmed.push(user);
    });

    return trimmed;
}

console.log(trimUsers(data, ['guid', 'name', 'company']));
/**/
