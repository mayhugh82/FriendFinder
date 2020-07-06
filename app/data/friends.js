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
      "https://media1.popsugar-assets.com/files/thumbor/scn94sWpjb-5OC9a_XiWF1QDcXY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/02/14/937/n/1922398/f5c95bef5c65ddf87d6196.24382719_/i/Young-Kit-Harington-Pictures.jpg",
    scores: [3, 1, 1, 1, 1, 1, 2, 4, 4, 1],
  },
  {
    name: "Emilia Clarke",
    photo: "https://www.gstatic.com/tv/thumb/persons/613075/613075_v9_bb.jpg",
    scores: [5, 5, 4, 4, 5, 3, 2, 5, 4, 1],
  },
  {
    name: "Peter Dinklage",
    photo: "https://www.gstatic.com/tv/thumb/persons/299302/299302_v9_bb.jpg",
    scores: [1, 1, 4, 4, 3, 3, 2, 5, 4, 3],
  },
  {
    name: "Maisie Williams",
    photo: "https://www.gstatic.com/tv/thumb/persons/613078/613078_v9_bb.jpg",
    scores: [2, 1, 5, 2, 4, 2, 1, 2, 4, 5],
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
