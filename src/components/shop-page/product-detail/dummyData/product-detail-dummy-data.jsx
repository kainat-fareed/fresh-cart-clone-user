// Custom Imports
import ProductSingleImg1 from "../../../../assets/images/products/product-single-img-1.jpg";
import ProductSingleImg2 from "../../../../assets/images/products/product-single-img-2.jpg";
import ProductSingleImg3 from "../../../../assets/images/products/product-single-img-3.jpg";
import ProductSingleImg4 from "../../../../assets/images/products/product-single-img-4.jpg";

// Avatars
import Avatar10 from "../../../../assets/images/avatar/avatar-10.jpg";
import Avatar12 from "../../../../assets/images/avatar/avatar-12.jpg";
import Avatar9 from "../../../../assets/images/avatar/avatar-9.jpg";
import Avatar8 from "../../../../assets/images/avatar/avatar-8.jpg";

import ProductImg1 from "../../../../assets/images/products/product-img-1.jpg";
import ProductImg2 from "../../../../assets/images/products/product-img-2.jpg";
import ProductImg3 from "../../../../assets/images/products/product-img-3.jpg";

// Related Products Imports
import Product1 from "../../../../assets/images/products/product-img-1.jpg";
import Product2 from "../../../../assets/images/products/product-img-2.jpg";
import Product3 from "../../../../assets/images/products/product-img-3.jpg";
import Product4 from "../../../../assets/images/products/product-img-4.jpg";
import Product9 from "../../../../assets/images/products/product-img-9.jpg";


// Share button icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const swiperProductImages = [
  {
    productImg: ProductSingleImg1,
  },
  {
    productImg: ProductSingleImg2,
  },
  {
    productImg: ProductSingleImg3,
  },
  {
    productImg: ProductSingleImg4,
  },
];

export const SingleProductDetailData = [
  {
    category: "Bakery Biscuits",
    productName: "Napolitanke Ljesnjak",
    rating: "4.5",
    reviews: "30",
    discount: "30%",
    productCode: "FBB00255",
    availability: "In Stock",
    type: "Fruits",
    shipping: "01 day shipping",
    shippingOffer: "01 day shipping.",
  },
];

// Share btn Data

export const ShareBtnData = [
  {
    icon: <FacebookIcon sx={{ fontSize: "16px" }} />,
    label: "Facebook",
  },
  {
    icon: <TwitterIcon sx={{ fontSize: "16px" }} />,
    label: "Twitter",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: "16px" }} />,
    label: "Instagram",
  },
];

// Product Detail Tab data if Dynamic
export const ProductDetailTabArr = {
  napolitanke_ljesnjak: {
    productDetail: [
      {
        heading1: "Nutrient Value & Benefits",
        para1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        heading2: "Storage Tips",
        para2:
          "Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        unit: "3 units",
        Seller: "DMart Pvt. LTD",
        Disclaimer:
          "mage shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.",
      },
    ],
  },
};

export const ProductDetailTab = {
  heading1: "Nutrient Value & Benefits",
  para1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  heading2: "Storage Tips",
  para2:
    "Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  unit: "3 units",
  seller: "DMart Pvt. LTD",
  disclaimer:
    "Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.",
};

// Table Data
export const createData = (label, rowValue) => {
  return { label, rowValue };
};

export const rows1 = [
  createData("Frozen yoghurt", "1000 Grams"),
  createData("Ingredient Type", "Vegetarian"),
  createData("Brand", "Dmart"),
  createData("Item Package Quantity", 1),
  createData("Form", "Larry the Bird"),
  createData("Manufacturer", "Dmart"),
  createData("Net Quantity", "340.0 Gram"),
  createData("Product Dimensions", "9.6 x 7.49 x 18.49 cm"),
];

export const rows2 = [
  createData("ASIN", "SB0025UJ75W"),
  createData("Best Sellers Rank", "#2 in Fruits"),
  createData("Date First Available", "30 April 2022"),
  createData("Item Weight", "500g"),
  createData("Generic Name", "Banana Robusta"),
];

export const slideRatingData = [
  {
    starValue: "5",
    progressValue: "53",
    progressPercentNum: "53",
  },
  {
    starValue: "4",
    progressValue: "22",
    progressPercentNum: "22",
  },
  {
    starValue: "3",
    progressValue: "14",
    progressPercentNum: "14",
  },
  {
    starValue: "2",
    progressValue: "5",
    progressPercentNum: "5",
  },
  {
    starValue: "1",
    progressValue: "7",
    progressPercentNum: "7",
  },
];

export const TopReviewFilterData = [
  {
    id: "1",
    option: "Top Reviews",
  },
  {
    id: "2",
    option: "Most Recent",
  },
];

export const ReviewsData = [
  {
    avatar: Avatar10,
    reviewerName: "Shankar Subbaraman",
    reviewDate: "30 December 2022",
    purchaseType: "Verified Purchase",
    rating: "5",
    feedback: "Need to recheck the weight at delivery point",
    reviewPara:
      "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
    productImg1: ProductImg1,
    productImg2: ProductImg2,
    productImg3: ProductImg3,
  },

  {
    avatar: Avatar12,
    reviewerName: "Robert Thomas",
    reviewDate: "29 December 2022",
    purchaseType: "Verified Purchase",
    rating: "4",
    feedback: "Need to recheck the weight at delivery point",
    reviewPara:
      "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
  },

  {
    avatar: Avatar9,
    reviewerName: "Barbara Tay",
    reviewDate: "28 December 2022",
    purchaseType: "Unverified Purchase",
    rating: "4",
    feedback: "Need to recheck the weight at delivery point",
    reviewPara:
      "Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.",
  },

  {
    avatar: Avatar8,
    reviewerName: "Sandra Langevin",
    reviewDate: "28 December 2022",
    purchaseType: "Unverified Purchase",
    rating: "4",
    feedback: "Great product",
    reviewPara: "Great product & package. Delivery can be expedited.",
  },
];

export const rateFeaturesData = [
  {
    heading: "Flavor",
    rating: "null",
  },
  {
    heading: "Value for money",
    rating: "null",
  },
  {
    heading: "Scent",
    rating: "null",
  },
];


// Related Products Data Arr
export const RelatedProductsArr = [
  {
    image: Product1,
    sale: "Sale",
    productCategory: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5",
    sold: "149",
    currentPrice: "18",
    previousPrice: "24",
  },

  {
    image: Product2,
    productCategory: "Bakery & Biscuits",
    productName: "NutriChoice Digestive Biscuits",
    rating: "4.5",
    sold: "25",
    currentPrice: "24",
  },

  {
    image: Product3,
    productCategory: "Bakery & Biscuits",
    productName: "Cadbury 5 star chocolate",
    rating: "5",
    sold: "469",
    currentPrice: "32",
    previousPrice: "35",
  },

  {
    image: Product4,
    productCategory: "Snack & Munchies",
    productName: "Onion Flavour Potato",
    rating: "3.5",
    sold: "456",
    currentPrice: "3",
    previousPrice: "5",
  },

  {
    image: Product9,
    productCategory: "Snack & Munchies",
    productName: "Slurrp Millet Chocolate",
    rating: "4.5",
    sold: "67",
    currentPrice: "3",
    previousPrice: "5",
  },

];