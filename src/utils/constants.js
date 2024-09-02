export const CONSTANTS = [
    "Electronics",
    "Accessories",
    "Books",
    "Jwellery",
    "Others",
];

export const COLLEGES = [
    "NITP",
    "IITP",
];

export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const AVATAR_URLS = [
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725221296/sssc6xcjryc9lw9pzbwp.png",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1720264641/r9ipbbd67w7j62lxutgt.png",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1720264641/w2jzpc5r0l1xt4ey9uo5.png",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1720264642/ibpxheujctlx4i4aicpa.png",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1720264642/qwxgjzqefjpd0uq3ql20.png",
    "http://res.cloudinary.com/dlgrwtkck/image/upload/v1720264642/cm6zwlkhpoofpvpcdzv2.png",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1720264642/e2dppxf61e9lcg2ggxxn.png",
];

export const YEARS = [
    2021,2022,2023,2024,2025,2026,2027,2028,2029,2030
];

export const MAX_COUNT = 4;

const DUMMY_OBJ = {
  isLost: false,
  _id: "66891234b7c7f91c34fed9cb",
  itemName: "fhv",
  category: "Books",
  media: [
    "http://res.cloudinary.com/dlgrwtkck/image/upload/v1720259125/e6tdsif6luwbnnvzrpab.png",
    "http://res.cloudinary.com/dlgrwtkck/image/upload/v1720259126/ujgbihkmgdf1vrne6qyd.png",
    "http://res.cloudinary.com/dlgrwtkck/image/upload/v1720259123/levxiksnfj5j00pdpmye.png",
    "http://res.cloudinary.com/dlgrwtkck/image/upload/v1720259123/heg2g1l4qnq1goeo7oug.png",
  ],
  description: "Profile got banned 😥\r\nsolved 600+ questions",
  address: {
    buildingName: "CSzd",
    collegeName: "NIT Patna",
    _id: "66891234b7c7f91c34fed9cc",
  },
  userId: {
    _id: "6688c49baf84d0b9fecbdd2b",
    fullName: "Tushar Gadwani",
    rollNo: "2106177",
  },
  isRetrieved: false,
  dateFound: "2024-07-06T09:45:24.702Z",
  createdAt: "2024-07-06T09:45:24.710Z",
  updatedAt: "2024-07-06T09:45:24.710Z",
  __v: 0,
};

export const ROUTES = Object.freeze({
  HOME: "/",
  SIGNUP: "/signup",
  LOGIN: "/login",
  ADDITEM: "/additem",
  EDITPROFILE: "/editprofile",
  CLAIMEDITEMS: "/claimedtems",
  FOUNDITEMS: "/founditems",
  LOSTITEMS: "/lostitems",
  RESETPASSWORTOKEN: "/reset-password/:token",
  RESETPASSWORD: "/reset-password",
  REWARDS: "/rewards",
  YOURPROFILE: "/profile",
  LEADERBOARD: "/leader-board",
  ABOUT: "/aboutus"
});

export const PASSWORDERRORMESSAGE = "Password must be at least 8 characters long.";