// ===============================================================================
// DATA
// Below data will hold all of the friends' info.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Lena Headey",
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/51L-LHu3k8L._AC_.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
