import AppleImage from "../../../../assets/images/products/product-img-15.jpg";
import PineAppleImage from "../../../../assets/images/products/product-img-16.jpg";
import KiwiImage from "../../../../assets/images/products/product-img-17.jpg";
import BananaImage from "../../../../assets/images/products/product-img-18.jpg";
import BeatRootImage from "../../../../assets/images/products/product-img-19.jpg";
// Enhanced images
import AppleImg from "../../../../assets/images/products/apple-img.jpg";
import AppleImg1 from "../../../../assets/images/products/apple-img-1.png";
import AppleImg2 from "../../../../assets/images/products/apple-img-2.jpg";

import PineApple1 from "../../../../assets/images/products/pineapple-img-1.jpg";
import PineApple2 from "../../../../assets/images/products/pineapple-img-2.jpg";

// Product Images
import Product1 from "../../../../assets/images/products/product-img-1.jpg";
import Product2 from "../../../../assets/images/products/product-img-2.jpg";
import Product3 from "../../../../assets/images/products/product-img-3.jpg";
import Product4 from "../../../../assets/images/products/product-img-4.jpg";
import Product5 from "../../../../assets/images/products/product-img-5.jpg";
import Product6 from "../../../../assets/images/products/product-img-6.jpg";
import Product7 from "../../../../assets/images/products/product-img-7.jpg";
import Product8 from "../../../../assets/images/products/product-img-8.jpg";
import Product9 from "../../../../assets/images/products/product-img-9.jpg";
import Product10 from "../../../../assets/images/products/product-img-10.jpg";
import Product11 from "../../../../assets/images/products/product-img-11.jpg";
import Product12 from "../../../../assets/images/products/product-img-12.jpg";

export const productSectionData = [
  {
    id: 1,
    productImg: AppleImage,
    images: [
      { productImg: AppleImg },
      { productImg: AppleImg1 },
      { productImg: AppleImg2 },
      { productImg: AppleImg },
    ],
    sale: "Sale",
    category: "Fruit & Vegetables",
    productName: "Fresh Apple",
    rating: "4.5",
    sold: "149",
    currentPrice: "18",
    previousPrice: "24",
    off: 6,
    reviews: "30",
    productCode: "FBB00101",
    availability: "In Stock",
    type: "Fruit",
    weight: "2 kg",
    action: "Add to Cart",
  },

  {
    id: 2,
    productImg: PineAppleImage,
    images: [
      { productImg: PineApple1 },
      { productImg: PineApple2 },
      { productImg: PineApple1 },
      { productImg: PineApple2 },
    ],
    sale: "14%",
    category: "Fruit & Vegetables",
    productName: "Pine Apple",
    rating: "4.5",
    sold: "25",
    currentPrice: "24",
    productCode: "FBB00102",
    availability: "In Stock",
    type: "Fruit",
    weight: "2 no",
    action: "Add to Cart",
  },

  {
    id: 3,
    productImg: KiwiImage,
    images: [
      { productImg: KiwiImage },
      { productImg: KiwiImage },
      { productImg: KiwiImage },
      { productImg: KiwiImage },
    ],
    category: "Fruit & Vegetables",
    productName: "Fresh kiwi",
    rating: "5",
    sold: "469",
    currentPrice: "32",
    previousPrice: "35",
    off: 3,
    reviews: "28",
    productCode: "FBB00103",
    availability: "Out of Stock",
    type: "Fruit",
    weight: "4 no",
    action: "Contact us",
  },

  {
    id: 4,
    productImg: BananaImage,
    images: [
      { productImg: BananaImage },
      { productImg: BananaImage },
      { productImg: BananaImage },
      { productImg: BananaImage },
    ],
    sale: "Hot",
    category: "Fruit & Vegetables",
    productName: "Fresh Banana",
    rating: "3.5",
    sold: "456",
    currentPrice: "3",
    previousPrice: "5",
    off: 2,
    productCode: "FBB00104",
    availability: "In Stock",
    type: "Fruit",
    weight:"$.98 / lb",
    action: "Add to Cart",
  },

  {
    id: 5,
    productImg: BeatRootImage,
    images: [
      { productImg: BeatRootImage },
      { productImg: BeatRootImage },
      { productImg: BeatRootImage },
      { productImg: BeatRootImage },
    ],
    category: "Fruit & Vegetables",
    productName: "Beatroot",
    rating: "4.5",
    sold: "39",
    currentPrice: "13",
    previousPrice: "18",
    off: 5,
    productCode: "FBB00105",
    availability: "In Stock",
    type: "Fruit",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 6,
    productImg: Product1,
    images: [
      { productImg: Product1 },
      { productImg: Product1 },
      { productImg: Product1 },
      { productImg: Product1 },
    ],
    sale: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5",
    sold: "149",
    currentPrice: "18",
    previousPrice: "24",
    off: 6,
    reviews: "45",
    productCode: "FBB00106",
    availability: "In Stock",
    type: "Snack",
    weight:"250 g",
    action: "Add to Cart",
  },

  {
    id: 7,
    productImg: Product2,
    images: [
      { productImg: Product2 },
      { productImg: Product2 },
      { productImg: Product2 },
      { productImg: Product2 },
    ],
    category: "Snack & Munchies",
    productName: "Britannia NutriChoice Digestive Biscuits",
    rating: "4.4",
    sold: "3,149",
    currentPrice: "15",
    reviews: "40",
    productCode: "FBB00107",
    availability: "In Stock",
    type: "Biscuits",
    weight:"250 g",
    action: "Add to Cart",
  },

  {
    id: 8,
    productImg: Product3,
    images: [
      { productImg: Product3 },
      { productImg: Product3 },
      { productImg: Product3 },
      { productImg: Product3 },
    ],
    category: "Bakery & Biscuits",
    productName: "Cadbury 5 star chocolate",
    rating: "4.7",
    sold: "1,130",
    currentPrice: "32",
    reviews: "70",
    productCode: "FBB00108",
    availability: "In Stock",
    type: "Chocolate",
    weight:"100 g",
    action: "Add to Cart",
  },

  {
    id: 9,
    productImg: Product4,
    images: [
      { productImg: Product4 },
      { productImg: Product4 },
      { productImg: Product4 },
      { productImg: Product4 },
    ],
    category: "Snack & Munchies",
    productName: "Onion Flavour Potato",
    rating: "4.5",
    sold: "140",
    currentPrice: "12",
    previousPrice: "18",
    off: 6,
    reviews: "100",
    productCode: "FBB00109",
    availability: "In Stock",
    type: "Snack",
    weight:"50 g",
    action: "Add to Cart",
  },

  {
    id: 10,
    productImg: Product5,
    images: [
      { productImg: Product5 },
      { productImg: Product5 },
      { productImg: Product5 },
      { productImg: Product5 },
    ],
    category: "Instant Food",
    productName: "Salted Instant Popcorn",
    sale: "14%",
    rating: "4.5",
    sold: "212",
    currentPrice: "40",
    previousPrice: "65",
    off: 25,
    reviews: "32",
    productCode: "FBB00110",
    availability: "Out of Stock",
    type: "Popcorn",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 11,
    productImg: Product6,
    images: [
      { productImg: Product6 },
      { productImg: Product6 },
      { productImg: Product6 },
      { productImg: Product6 },
    ],
    category: "Dairy, Bread & Eggs",
    productName: "Epigamia Blueberry Greek Yogurt, 90g",
    rating: "4.4",
    sold: "694",
    currentPrice: "18",
    previousPrice: "24",
    off: 6,
    reviews: "45",
    productCode: "FBB00111",
    availability: "In Stock",
    type: "Yogurt",
    weight:"90 g",
    action: "Add to Cart",
  },

  {
    id: 12,
    productImg: Product8,
    images: [
      { productImg: Product8 },
      { productImg: Product8 },
      { productImg: Product8 },
      { productImg: Product8 },
    ],
    category: "Instant Food",
    productName: "Kellogg's Special K Original Cereal",
    rating: "4.7",
    sold: "1,130",
    currentPrice: "25",
    previousPrice: "28",
    off: 3,
    reviews: "45",
    productCode: "FBB00112",
    availability: "In Stock",
    type: "Cereals",
    weight:"1 kg",
    action: "Add to Cart",
  },

  {
    id: 13,
    productImg: Product9,
    images: [
      { productImg: Product9 },
      { productImg: Product9 },
      { productImg: Product9 },
      { productImg: Product9 },
    ],
    category: "Instant Food",
    productName: "Slurrp Farm No Maida Millet Pancake Mix",
    rating: "4.5",
    sold: "212",
    currentPrice: "34",
    previousPrice: "38",
    off: 4,
    reviews: "91",
    productCode: "FBB00113",
    availability: "Out of Stock",
    type: "Pancake Mix",
    weight:"1 kg",
    action: "Add to Cart",
  },
  // Shop products data Array
  {
    id: 14,
    productImg: Product1,
    images: [
      { productImg: Product1 },
      { productImg: Product1 },
      { productImg: Product1 },
      { productImg: Product1 },
    ],
    sale: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5",
    sold: "149",
    currentPrice: "18",
    previousPrice: "24",
    off: 6,
    reviews: "45",
    productCode: "FBB00106",
    availability: "In Stock",
    type: "Snack",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 15,
    productImg: Product2,
    images: [
      { productImg: Product2 },
      { productImg: Product2 },
      { productImg: Product2 },
      { productImg: Product2 },
    ],
    category: "Bakery & Biscuits",
    productName: "NutriChoice Digestive Biscuits",
    rating: "4.5",
    sold: "25",
    currentPrice: "24",
    reviews: "40",
    productCode: "FBB00107",
    availability: "In Stock",
    type: "Biscuits",
    weight:"250 g",
    action: "Add to Cart",
  },
  {
    id: 16,
    productImg: Product3,
    images: [
      { productImg: Product3 },
      { productImg: Product3 },
      { productImg: Product3 },
      { productImg: Product3 },
    ],
    category: "Bakery & Biscuits",
    productName: "Cadbury 5 star chocolate",
    rating: "5",
    sold: "469",
    currentPrice: "32",
    previousPrice: "35",
    off: 3,
    reviews: "70",
    productCode: "FBB00108",
    availability: "In Stock",
    type: "Chocolate",
    weight:"100 g",
    action: "Add to Cart",
  },
  {
    id: 17,
    productImg: Product4,
    images: [
      { productImg: Product4 },
      { productImg: Product4 },
      { productImg: Product4 },
      { productImg: Product4 },
    ],
    sale: "Hot",
    category: "Snack & Munchies",
    productName: "Onion Flavour Potato",
    rating: "3.5",
    sold: "456",
    currentPrice: "3",
    previousPrice: "5",
    off: 2,
    reviews: "100",
    productCode: "FBB00109",
    availability: "In Stock",
    type: "Snack",
    weight:"100 g",
    action: "Add to Cart",
  },
  {
    id: 18,
    productImg: Product11,
    images: [
      { productImg: Product11 },
      { productImg: Product11 },
      { productImg: Product11 },
      { productImg: Product11 },
    ],
    category: "Tea, Coffee & Drinks",
    productName: "Nestle Coffee",
    rating: "4.5",
    sold: "350",
    currentPrice: "12",
    previousPrice: "18",
    off: 5,
    reviews: "100",
    productCode: "FBB00112",
    availability: "In Stock",
    type: "Coffee",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 19,
    productImg: Product5,
    images: [
      { productImg: Product5 },
      { productImg: Product5 },
      { productImg: Product5 },
      { productImg: Product5 },
    ],
    category: "Instant Food",
    productName: "Salted Instant Popcorn",
    rating: "4.5",
    sold: "39",
    currentPrice: "13",
    previousPrice: "18",
    off: 5,
    reviews: "32",
    productCode: "FBB00110",
    availability: "Out of Stock",
    type: "Popcorn",
    weight:"100 g",
    action: "Add to Cart",
  },
  {
    id: 20,
    productImg: Product6,
    images: [
      { productImg: Product6 },
      { productImg: Product6 },
      { productImg: Product6 },
      { productImg: Product6 },
    ],
    sale: "Sale",
    category: "Dairy, Bread & Eggs",
    productName: "Blueberry Greek Yogurt",
    rating: "4.5",
    sold: "189",
    currentPrice: "18",
    previousPrice: "24",
    off: 6,
    reviews: "45",
    productCode: "FBB00111",
    availability: "In Stock",
    type: "Yogurt",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 21,
    productImg: Product7,
    images: [
      { productImg: Product7 },
      { productImg: Product7 },
      { productImg: Product7 },
      { productImg: Product7 },
    ],
    category: "Dairy, Bread & Eggs",
    productName: "Britannia Cheese Slices",
    rating: "5",
    sold: "345",
    currentPrice: "24",
    reviews: "58",
    productCode: "FBB00121",
    availability: "In Stock",
    type: "Cheese",
    weight:"500 g",
    action: "Add to Cart",
  },
  {
    id: 22,
    productImg: Product8,
    images: [
      { productImg: Product8 },
      { productImg: Product8 },
      { productImg: Product8 },
      { productImg: Product8 },
    ],
    category: "Instant Food",
    productName: "Kellogg's Original Cereal",
    rating: "4",
    sold: "90",
    currentPrice: "32",
    previousPrice: "35",
    off: 3,
    reviews: "45",
    productCode: "FBB00112",
    availability: "In Stock",
    type: "Cereals",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 23,
    productImg: Product9,
    images: [
      { productImg: Product9 },
      { productImg: Product9 },
      { productImg: Product9 },
      { productImg: Product9 },
    ],
    category: "Snack & Munchies",
    productName: "Slurrp Millet Chocolate",
    rating: "4.5",
    sold: "67",
    currentPrice: "3",
    previousPrice: "5",
    off: 2,
    reviews: "65",
    productCode: "FBB00122",
    availability: "In Stock",
    type: "Chocolate",
    weight:"100 g",
    action: "Add to Cart",
  },
  {
    id: 24,
    productImg: Product10,
    images: [
      { productImg: Product10 },
      { productImg: Product10 },
      { productImg: Product10 },
      { productImg: Product10 },
    ],
    category: "Dairy, Bread & Eggs",
    productName: "Amul Butter - 500 g",
    rating: "3.5",
    sold: "89",
    currentPrice: "13",
    previousPrice: "18",
    off: 5,
    reviews: "49",
    productCode: "FBB00123",
    availability: "In Stock",
    type: "Butter",
    weight:"500 g",
    action: "Add to Cart",
  },
  {
    id: 25,
    productImg: Product5,
    images: [
      { productImg: Product5 },
      { productImg: Product5 },
      { productImg: Product5 },
      { productImg: Product5 },
    ],
    category: "Instant Food",
    productName: "Sweet Instant Popcorn",
    rating: "4.5",
    sold: "26",
    currentPrice: "13",
    previousPrice: "18",
    off: 5,
    reviews: "95",
    productCode: "FBB00124",
    availability: "In Stock",
    type: "Popcorn",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 26,
    productImg: Product11,
    images: [
      { productImg: Product11 },
      { productImg: Product11 },
      { productImg: Product11 },
      { productImg: Product11 },
    ],
    category: "Tea, Coffee & Drinks",
    productName: "Roasted Ground Coffee",
    rating: "4.5",
    sold: "410",
    currentPrice: "12",
    previousPrice: "18",
    off: 6,
    reviews: "42",
    productCode: "FBB00125",
    availability: "out of Stock",
    type: "Coffee",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 27,
    productImg: Product12,
    images: [
      { productImg: Product12 },
      { productImg: Product12 },
      { productImg: Product12 },
      { productImg: Product12 },
    ],
    category: "Fruits & Vegetables",
    productName: "Crushed Tomatoes",
    rating: "4.5",
    sold: "230",
    currentPrice: "62",
    previousPrice: "70",
    off: 8,
    reviews: "73",
    productCode: "FBB00126",
    availability: "In Stock",
    type: "Vegetable",
    weight:"500 g",
    action: "Add to Cart",
  },
  {
    id: 28,
    productImg: Product8,
    images: [
      { productImg: Product8 },
      { productImg: Product8 },
      { productImg: Product8 },
      { productImg: Product8 },
    ],
    category: "Instant Food",
    productName: "Corn Flask",
    rating: "4",
    sold: "80",
    currentPrice: "32",
    previousPrice: "35",
    off: 3,
    reviews: "25",
    productCode: "FBB00127",
    availability: "In Stock",
    type: "Cereals",
    weight:"500 g",
    action: "Add to Cart",
  },
  {
    id: 29,
    productImg: Product10,
    images: [
      { productImg: Product10 },
      { productImg: Product10 },
      { productImg: Product10 },
      { productImg: Product10 },
    ],
    category: "Dairy, Bread & Eggs",
    productName: "Amul Butter - 250 g",
    rating: "3.5",
    sold: "210",
    currentPrice: "7",
    previousPrice: "12",
    off: 5,
    reviews: "85",
    productCode: "FBB00128",
    availability: "In Stock",
    type: "Butter",
    weight:"250 g",
    action: "Add to Cart",
  },
  {
    id: 30,
    productImg: Product4,
    images: [
      { productImg: Product4 },
      { productImg: Product4 },
      { productImg: Product4 },
      { productImg: Product4 },
    ],
    sale: "Hot",
    category: "Snack & Munchies",
    productName: "Lays Potato Chips",
    rating: "3.5",
    sold: "545",
    currentPrice: "3",
    previousPrice: "5",
    off: 2,
    reviews: "45",
    productCode: "FBB00129",
    availability: "Out of Stock",
    type: "Snacks",
    weight:"50 g",
    action: "Add to Cart",
  },
  {
    id: 31,
    productImg: Product1,
    images: [
      { productImg: Product1 },
      { productImg: Product1 },
      { productImg: Product1 },
      { productImg: Product1 },
    ],
    sale: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Mix Nimko",
    rating: "4.5",
    sold: "240",
    currentPrice: "18",
    previousPrice: "24",
    off: 6,
    reviews: "44",
    productCode: "FBB00130",
    availability: "Out of Stock",
    type: "Munchies",
    weight:"1 kg",
    action: "Add to Cart",
  },
  {
    id: 32,
    productImg: Product2,
    images: [
      { productImg: Product2 },
      { productImg: Product2 },
      { productImg: Product2 },
      { productImg: Product2 },
    ],
    category: "Bakery & Biscuits",
    productName: "Wheat Biscuits",
    rating: "4",
    sold: "480",
    currentPrice: "15",
    previousPrice: "21",
    off: 6,
    reviews: "46",
    productCode: "FBB00131",
    availability: "Out of Stock",
    type: "Biscuits",
    weight:"250 g",
    action: "Add to Cart",
  },
  {
    id: 33,
    productImg: Product12,
    images: [
      { productImg: Product12 },
      { productImg: Product12 },
      { productImg: Product12 },
      { productImg: Product12 },
    ],
    category: "Fruits & Vegetables",
    productName: "Tomatoe Purry",
    rating: "4.5",
    sold: "200",
    currentPrice: "73",
    previousPrice: "80",
    off: 7,
    reviews: "25",
    productCode: "FBB00132",
    availability: "In Stock",
    type: "Vegetables",
    weight:"1 kg",
    action: "Add to Cart",
  },
];
