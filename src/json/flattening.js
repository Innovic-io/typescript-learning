/* Flatten this array */

/* TASKS */

// 1. Function that calculate average age of users in array
// 2. Function that collect all available eyeColors
// 3. Functions that group users by company, output should be:
/*
[{
 company: "MALATHION",
 users: [list of users]
}, {
 company: "KATAKANA",
 users: [list of users]
}]
// 4. Function that sort user by their bank balance. ( higher on top )


 */

const users = [
    {
        "_id": "5ab4b8a9e79722e3e40d85f4",
        "index": 0,
        "guid": "256d15d7-cd71-4e8a-be77-2a1a9edc2133",
        "isActive": false,
        "balance": "$3,176.16",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "brown",
        "name": {
            "first": "Whitney",
            "last": "Kramer"
        },
        "company": "MALATHION",
        "email": "whitney.kramer@malathion.io",
        "phone": "+1 (937) 401-3882",
        "address": "811 Columbia Street, Homestead, Florida, 2117",
        "about": "Exercitation qui ut mollit consectetur officia ea duis. Aute irure velit aute sunt quis commodo est laborum sint quis qui. Amet ea sunt amet incididunt irure adipisicing magna laboris sunt ut amet laborum quis adipisicing.",
        "registered": "Saturday, April 25, 2015 8:48 AM",
        "latitude": "-73.560845",
        "longitude": "125.068459",
        "tags": [
            "pariatur",
            "nulla",
            "aliquip",
            "aute",
            "irure"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Colon Barr"
            },
            {
                "id": 1,
                "name": "Martin Roth"
            },
            {
                "id": 2,
                "name": "Taylor Livingston"
            }
        ],
        "greeting": "Hello, Whitney! You have 10 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5ab4b8aaf3f112007ddf8138",
        "index": 1,
        "guid": "40779e6b-a75a-423c-b200-832a9aac4422",
        "isActive": false,
        "balance": "$1,487.20",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "eyeColor": "green",
        "name": {
            "first": "Monique",
            "last": "Porter"
        },
        "company": "MALATHION",
        "email": "monique.porter@sultraxin.info",
        "phone": "+1 (931) 496-2220",
        "address": "879 Newkirk Avenue, Kempton, New Jersey, 4721",
        "about": "Anim eiusmod sunt ea ipsum aliquip eiusmod labore. Consequat quis enim cillum laborum aliqua aliquip esse aliquip reprehenderit ea deserunt. Aute tempor excepteur qui eiusmod nulla ex.",
        "registered": "Wednesday, July 9, 2014 2:29 AM",
        "latitude": "-5.441669",
        "longitude": "145.910592",
        "tags": [
            "occaecat",
            "in",
            "proident",
            "est",
            "voluptate"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Hudson Head"
            },
            {
                "id": 1,
                "name": "Millicent Haynes"
            },
            {
                "id": 2,
                "name": "Buckner Tucker"
            }
        ],
        "greeting": "Hello, Monique! You have 6 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5ab4b8aac3663b81b4c5b406",
        "index": 2,
        "guid": "8b8556f7-1804-4670-8035-cc2102eecd50",
        "isActive": false,
        "balance": "$3,650.95",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "brown",
        "name": {
            "first": "Helga",
            "last": "Mcbride"
        },
        "company": "KATAKANA",
        "email": "helga.mcbride@katakana.net",
        "phone": "+1 (982) 429-2408",
        "address": "439 Myrtle Avenue, Irwin, Ohio, 638",
        "about": "Nulla irure ad excepteur minim qui voluptate ea velit occaecat. Tempor excepteur ut minim sunt elit labore elit fugiat enim dolor et. Ex voluptate aliquip est esse do consectetur commodo laborum. Ut cillum elit quis velit nostrud exercitation duis incididunt. Sint reprehenderit aliquip ea excepteur proident in sunt laboris amet. Nisi excepteur nulla minim veniam fugiat occaecat eiusmod do ex ullamco quis laboris. Commodo et commodo reprehenderit culpa qui dolore proident voluptate sint reprehenderit enim aute eiusmod non.",
        "registered": "Thursday, January 29, 2015 2:20 PM",
        "latitude": "-45.717824",
        "longitude": "-83.045925",
        "tags": [
            "adipisicing",
            "culpa",
            "pariatur",
            "sunt",
            "aliqua"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Sutton Carver"
            },
            {
                "id": 1,
                "name": "Norris Foreman"
            },
            {
                "id": 2,
                "name": "Mcfadden Donovan"
            }
        ],
        "greeting": "Hello, Helga! You have 10 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5ab4b8aa3107d794f06ca4e6",
        "index": 3,
        "guid": "b68ab0d2-85ab-4719-b9cb-f22acde59712",
        "isActive": true,
        "balance": "$3,307.77",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "eyeColor": "green",
        "name": {
            "first": "Georgina",
            "last": "Clay"
        },
        "company": "BALUBA",
        "email": "georgina.clay@baluba.me",
        "phone": "+1 (838) 525-3680",
        "address": "926 Abbey Court, Zarephath, Massachusetts, 2552",
        "about": "Excepteur ipsum velit eiusmod esse incididunt amet aliqua sit exercitation enim cupidatat proident quis excepteur. Do cupidatat fugiat cupidatat amet. Fugiat id cillum id duis velit irure reprehenderit nisi dolor fugiat. Aliquip voluptate sit proident in veniam excepteur excepteur et do est sunt sit. Enim sit amet laboris dolor id et culpa. Magna mollit irure labore ad tempor adipisicing esse occaecat exercitation consequat ea. Adipisicing dolore proident nostrud cupidatat veniam commodo dolore nulla veniam non et id.",
        "registered": "Tuesday, August 15, 2017 4:44 PM",
        "latitude": "17.296905",
        "longitude": "-2.551942",
        "tags": [
            "ad",
            "minim",
            "ullamco",
            "eu",
            "et"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Bryant Mcmahon"
            },
            {
                "id": 1,
                "name": "Dixie Trujillo"
            },
            {
                "id": 2,
                "name": "Travis Robinson"
            }
        ],
        "greeting": "Hello, Georgina! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5ab4b8aac7d114738acbd340",
        "index": 4,
        "guid": "c8451ab7-f89b-4361-9a07-975073b811cc",
        "isActive": true,
        "balance": "$1,484.14",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "green",
        "name": {
            "first": "Luann",
            "last": "Berger"
        },
        "company": "TRI@TRIBALOG",
        "email": "luann.berger@tri@tribalog.co.uk",
        "phone": "+1 (806) 483-2787",
        "address": "482 Banker Street, Lloyd, Idaho, 2649",
        "about": "Ipsum fugiat consectetur mollit ex in magna aliqua aute aute velit pariatur cillum enim et. Aliqua culpa adipisicing anim amet ullamco velit sit. Nisi sint commodo dolor adipisicing officia ex mollit.",
        "registered": "Saturday, October 17, 2015 10:40 AM",
        "latitude": "39.435485",
        "longitude": "169.628135",
        "tags": [
            "in",
            "fugiat",
            "anim",
            "et",
            "aute"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Olive Mason"
            },
            {
                "id": 1,
                "name": "Ethel Pace"
            },
            {
                "id": 2,
                "name": "Shepard Miranda"
            }
        ],
        "greeting": "Hello, Luann! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5ab4b8aa01cd0322a50be501",
        "index": 5,
        "guid": "494352fd-0abd-4d3c-9c80-f693386b1c58",
        "isActive": false,
        "balance": "$2,703.63",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "brown",
        "name": {
            "first": "Shepherd",
            "last": "Flynn"
        },
        "company": "SKYPLEX",
        "email": "shepherd.flynn@skyplex.tv",
        "phone": "+1 (887) 569-3765",
        "address": "405 Seigel Street, Marion, Rhode Island, 3434",
        "about": "Ad quis irure nisi enim irure dolor veniam eu ut ex. Cupidatat eu quis non enim non et aute adipisicing culpa velit culpa. Non pariatur reprehenderit ut tempor amet dolor magna duis veniam pariatur sint. Irure magna consectetur Lorem velit esse deserunt in aliquip duis irure aliquip exercitation. Aliquip consequat anim nulla dolore esse amet eu veniam eu.",
        "registered": "Sunday, August 30, 2015 3:28 PM",
        "latitude": "-76.00058",
        "longitude": "-81.055483",
        "tags": [
            "cupidatat",
            "ea",
            "labore",
            "dolore",
            "labore"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Preston Todd"
            },
            {
                "id": 1,
                "name": "Marissa Marks"
            },
            {
                "id": 2,
                "name": "Oliver Hogan"
            }
        ],
        "greeting": "Hello, Shepherd! You have 7 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5ab4b8aa9c02d6de4f61da27",
        "index": 6,
        "guid": "aea9386b-bfb3-4921-8bd5-15a39f4cf6e5",
        "isActive": false,
        "balance": "$3,910.59",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "blue",
        "name": {
            "first": "Addie",
            "last": "Beard"
        },
        "company": "CABLAM",
        "email": "addie.beard@cablam.us",
        "phone": "+1 (827) 499-3808",
        "address": "237 Buffalo Avenue, Gorst, West Virginia, 9709",
        "about": "Irure culpa et deserunt cupidatat. Eu cupidatat tempor non mollit eiusmod duis eu aliquip amet ullamco. Tempor esse id proident voluptate sint reprehenderit nulla est ullamco eu ut occaecat quis. Nisi voluptate consequat ullamco Lorem amet. Ex culpa est mollit aliquip incididunt exercitation. Ut consequat mollit anim ipsum.",
        "registered": "Wednesday, July 8, 2015 4:31 PM",
        "latitude": "47.206568",
        "longitude": "88.43244",
        "tags": [
            "deserunt",
            "deserunt",
            "nulla",
            "mollit",
            "in"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Lowe Knowles"
            },
            {
                "id": 1,
                "name": "Carson Bowers"
            },
            {
                "id": 2,
                "name": "Karin Jensen"
            }
        ],
        "greeting": "Hello, Addie! You have 10 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5ab4b8aad48e3744ea06660c",
        "index": 7,
        "guid": "2645c514-fb2d-4ebc-9148-4a9e5726eef6",
        "isActive": false,
        "balance": "$1,285.32",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "green",
        "name": {
            "first": "Barry",
            "last": "Horne"
        },
        "company": "ZILLACOM",
        "email": "barry.horne@zillacom.biz",
        "phone": "+1 (967) 511-2437",
        "address": "479 Farragut Road, Gwynn, Indiana, 116",
        "about": "Officia ipsum elit fugiat ea et sint. Ex tempor reprehenderit do pariatur labore eu sint et pariatur ut commodo irure proident. In eiusmod nostrud mollit occaecat cillum fugiat eiusmod. Consequat irure nulla sit elit. Adipisicing anim ipsum consequat deserunt esse esse.",
        "registered": "Monday, March 24, 2014 9:39 AM",
        "latitude": "-42.599231",
        "longitude": "164.500246",
        "tags": [
            "do",
            "non",
            "culpa",
            "anim",
            "non"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [
            {
                "id": 0,
                "name": "Emerson Booker"
            },
            {
                "id": 1,
                "name": "Kirk Rosario"
            },
            {
                "id": 2,
                "name": "Annie Holman"
            }
        ],
        "greeting": "Hello, Barry! You have 7 unread messages.",
        "favoriteFruit": "banana"
    }
];

function calculateAverageAge(users) {
    var sumAge = 0;
    users.forEach(function (value) {
        sumAge += value.age
    });
    return sumAge / users.length;
}

calculateAverageAge(users);
console.log(calculateAverageAge(users));

function collectEyeColors(users) {
    var eyeColors = [];
    users.forEach(function (value) {
        if (!(eyeColors.includes(value.eyeColor))) {
            eyeColors.push(value.eyeColor);
        }
    });
    return eyeColors;
}

console.log(collectEyeColors(users));

function groupByCompany(users) {
    let group = [];
    const companies = [];

    users.forEach(function (value) {
        if (!(companies.includes(value.company))) {
            companies.push(value.company);
        }
    });

    companies.forEach(function (comp) {
        const companyusers = users.filter(user => user.company === comp);
        group.push({
            "company": comp,
            "users": companyusers
        });
    });

    return group;
}

//console.log(groupByCompany(users));

function groupByCompanyByVlado(users) {
    const groups = [];

    users.forEach(user => {
        const index = groups.findIndex(item => item.company === user.company);
        if (index >= 0) {
            groups[index].users.push(user);
        } else {
            groups.push({
                "company": user.company,
                "users": [user]
            });
        }
    });
    return groups;
}

//console.log(groupByCompanyByVlado(users));

function sortByBankBalance(users) {

    function toFloat(balance) {
        return parseFloat(balance.slice(1).replace(',',''));
    }

    const sorted = users.sort((a, b) => toFloat(a.balance) < toFloat(b.balance));

    console.log(sorted);
}

console.log(sortByBankBalance(users));


module.exports = {
    calculateAverageAge: calculateAverageAge,
    collectEyeColors: collectEyeColors
};
