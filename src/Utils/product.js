import { v4 as uuidv4 } from "uuid";
const products = [
  {
    id: uuidv4(),
    name: "T-shirt for men",
    thumbnail:
      "https://mockups-design.com/wp-content/uploads/2021/08/Hanging_T-Shirt_Mockup_2.jpg",
    price: 4999,
    originalPrice: 5498,
    discount: 10,
    category: "Men",
    description: "This is tshirt for men.",
  },
  {
    id: uuidv4(),
    name: "T-shirt for women",
    thumbnail:
      "https://mockups-design.com/wp-content/uploads/2021/08/Hanging_T-Shirt_Mockup_2.jpg",
    price: 1400,
    originalPrice: 1638,
    discount: 17,
    category: "Women",
    description: "This is tshirt for women.",
  },
  {
    id: uuidv4(),
    name: "T-shirt for kid",
    thumbnail:
      "https://mockups-design.com/wp-content/uploads/2021/08/Hanging_T-Shirt_Mockup_2.jpg",
    price: 1599,
    originalPrice: 1854,
    discount: 16,
    category: "Kid",
    description: "This is tshirt for kid.",
  },
  {
    id: uuidv4(),
    name: "Sweater for women ",
    thumbnail:
      "https://mockups-design.com/wp-content/uploads/2021/08/Hanging_T-Shirt_Mockup_2.jpg",
    price: 7999,
    originalPrice: 11.198,
    discount: 40,
    category: "Women",
    description: "This is sweater for women.",
  },
];

export default products;
