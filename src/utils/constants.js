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
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725441906/pfg49mk7qccyfxlngud3.jpg",
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


export const REWARDS = [
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725444262/g2shscl9rlbt327w9m1a.avif",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725477718/x0vt8fjb3rojg0pam4yw.jpg",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725451004/kh53mqnnnnxsjgelfo46.jpg",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725444263/dl3fsxl8nesdtceoywcl.jpg",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725450294/qfxm4vpa6pcjjldwz5mj.webp",
];

export const RANKS = {
  0: {
    rank: "HELPER",
    badge:
      "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725480893/wxogqjxrz5yndzyn5yo1.jpg",
  },
  1: {
    rank: "SAVIOUR",
    badge:
      "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725478496/yyal8uhuflmzmapwape6.svg",
  },
  2: {
    rank: "GOD",
    badge:
      "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725480893/gxjot22svov2vysg51bs.jpg",
  },
};

export const PROFILE = [
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725481389/maj2oeitym0vuhwf9pja.jpg",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725481382/hlkjz3jqhlmpnu7qnjow.jpg",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725481268/sng1qbesyty2fxgevm5r.jpg",
    "https://res.cloudinary.com/dlgrwtkck/image/upload/v1725481267/mul0gbvr9pbf8kqqusua.jpg"
]

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
  ABOUT: "/aboutus",
  WORK: "/work",
});

export const PASSWORDERRORMESSAGE = "Password must be at least 8 characters long.";