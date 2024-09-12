import BananaImg from "../../../../assets/images/products/product-img-18.jpg";
import KiwiImg from "../../../../assets/images/products/product-img-17.jpg";
import PineappleImg from "../../../../assets/images/products/product-img-16.jpg";
import BeatRootImg from "../../../../assets/images/products/product-img-19.jpg";
import AppleImg from "../../../../assets/images/products/product-img-15.jpg";

// Table Data
export const createData = (img, product, weight, amount, status, action) => {
  return {img, product, weight, amount, status, action };
};

export const rows = [
  createData(BananaImg, "Organic Banana", ".98 / lb", 35.00, "In Stock", "Add to Cart" ),
  createData(KiwiImg, "Fresh Kiwi", "4 no", 20.97, "Out of Stock", "Contact us" ),
  createData(PineappleImg, "Golden Pineapple", "2 no", 35.00, "In Stock", "Add to Cart" ),
  createData(BeatRootImg, "BeatRoot", "1 kg", 29.00, "In Stock", "Add to Cart" ),
  createData(AppleImg, "Fresh Apple", "2 kg", 70.00, "In Stock", "Add to Cart" ),
];
