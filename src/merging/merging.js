// create function which:

// 1. remove duplicate tags from user object.
// 2. calculate how many friends user have
// 3. create array of strings where each string is sentence that describe user:

/*
const ouput = [
'Mrs. Letha Fletcher from 427 Downing Street, Darbydale, Alabama, 5181',
'Mr. Leva Calhoun from 147 Delevan Street, Starks, Louisiana, 98385181'
]

 */
const data = require("./data").data;

function removeRepeatedTags(data) {
    let tags = [], users = [];

    data.forEach(object => {
            let user = {};
            object["tags"].forEach(value => {
                if (!(tags.includes(value))) {
                    tags.push(value);
                }
            });

            user = object;
            user["tags"] = tags;
            users.push(user);
            tags = [];
        }
    );
    return users;
}

//console.log(removeRepeatedTags(data));

function calculateFriends(data, user) {
    return data.find(object => object.name === user)
        .friends.length;
}

//console.log(calculateFriends(data, "Barber Huff"));

function basicInfo(data) {
    const people = [];
    let sentence;
    data.forEach(object => {
        if (object.gender === "female") {
            if (object.married) {
                sentence = "Mrs. ";
            } else {
                sentence = "Ms. ";
            }
        } else {
            sentence = "Mr. ";
        }
        people.push(sentence.concat(object.name, " from ", object.address));
    });
    return people;
}

console.log(basicInfo(data));
