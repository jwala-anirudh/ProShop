import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Harsha M",
    email: "harsha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anirudh",
    email: "anirudh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
