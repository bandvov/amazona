const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
  {
    name: "aaada",
    email: "aaaa@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
];
const products = [
  {
    name: "asd as ds",
    category: "shirt",
    brand: "Nike",
    image: "/images/p1.jpg",
    description: "dd as dasdsasad as dsa dsa d as ds",
    price: 120,
    numberViews: 11,
    rating: 1,
    countInStock: 0,
  },
  {
    name: " cvb vbasd as ds",
    category: "shirt",
    brand: "Puma",
    image: "/images/p2.jpg",
    description: "cvut tybnx fgfs",
    price: 230,
    numberViews: 41,
    rating: 2,
    countInStock: 2,
  },
  {
    name: "bata tat ta",
    category: "shirt",
    brand: "Briony",
    image: "/images/p5.jpg",
    description: "gfnvb ibi ib fdf hsh  as ds",
    price: 180,
    numberViews: 64,
    rating: 2.5,
    countInStock: 12,
  },
  {
    name: "bata tat ta",
    category: "shirt",
    brand: "Briony",
    image: "/images/p5.jpg",
    description: "gfnvb ibi ib fdf hsh  as ds",
    price: 180,
    numberViews: 64,
    rating: 3,
    countInStock: 26,
  },
  {
    name: "bata tat ta",
    category: "shirt",
    brand: "Briony",
    image: "/images/p5.jpg",
    description: "gfnvb ibi ib fdf hsh  as ds",
    price: 180,
    numberViews: 64,
    rating: 4.5,
    countInStock: 5,
  },
];

module.exports = { products, users };
