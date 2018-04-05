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

    return data.map(object => {

            const tags = [];

            object["tags"].forEach(tag => {
                if (!(tags.includes(tag))) {
                    tags.push(tag);
                }
            });

            return { ...object, tags };
        });
}

// console.log(removeRepeatedTags(data));

function calculateFriends(data, user) {

    return data.find(object => object.name === user).friends.length;
}

//console.log(calculateFriends(data, "Barber Huff"));

function basicInfo(data) {
    const people = [];

    data.forEach(user => {

        let sentence;

        if (user.gender === "female") {
            sentence = (user.married) ? 'Mrs.' : 'Ms.';
        } else {
            sentence = "Mr.";
        }

       // people.push([sentence, user.name, 'from', user.address].join(' '));
        people.push(`${sentence} ${user.name} from ${user.address}`);
        //people.push(sentence.concat(user.name, " from ", user.address));
    });

    return people;
}

console.log(basicInfo(data));
