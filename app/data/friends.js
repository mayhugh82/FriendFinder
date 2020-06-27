// ===============================================================================
// DATA
// Below data will hold all of the friends' info.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: "Lena Headey",
    photo: "https://i.insider.com/5b5b52ffbda1c723008b45aa?width=1300&format=jpeg&auto=webp",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
