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
  {
    name: "Kit Harrington",
    photo:
      "https://i.pinimg.com/236x/6b/57/8e/6b578eca7dcd2e97fe9e98c9ad3d8ddf.jpg",
    scores: [3, 1, 1, 1, 1, 1, 2, 4, 4, 1],
  },
  {
    name: "Emilia Clarke",
    photo: "https://static.tvtropes.org/pmwiki/pub/images/emiliaclarke.jpg",
    scores: [5, 5, 4, 4, 5, 3, 2, 5, 4, 1],
  },
  {
    name: "Peter Dinklage",
    photo:
      "https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/Peter-Dinklage-450x600.jpg?itok=tmJQ4yxW",
    scores: [1, 1, 4, 4, 3, 3, 2, 5, 4, 3],
  },
  {
    name: "Maisie Williams",
    photo:
      "https://i.pinimg.com/236x/07/1b/4b/071b4b4d63da5de289f875c7f5fda85f.jpg",
    scores: [2, 1, 5, 2, 4, 2, 1, 2, 4, 5],
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
