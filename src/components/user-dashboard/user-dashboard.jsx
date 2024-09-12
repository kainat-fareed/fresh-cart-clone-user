// React imports
import React from "react";

// Custom imports
import Footer from "../home-page/footer-section/footer";
import HeroSection from "../home-page/hero-section/hero-section";
import BannerImages from "../home-page/ad-banner-section/ad-banner-images";
import PopularRecipe from "../home-page/popular-recipe-section/popular-recipe";
import ShopOffersSection from "../home-page/shop-feedback-section/shop-and-offers-section";
import BestStoreLocation from "../home-page/best-store-location-section/best-store-location";
import BestSellingProducts from "../home-page/best-selling-products-section/best-selling-products";
import ShopByCategorySection from "../home-page/shop-by-category-section/shop-by-category-section";
import PopularProductsSection from "../home-page/popular-products-section/popular-products-section";

const UserDashboard = () => {
  return (
    <>
      <HeroSection />
      <ShopByCategorySection />
      <PopularProductsSection />
      <BannerImages />
      <BestSellingProducts />
      <BestStoreLocation />
      <PopularRecipe />
      <ShopOffersSection />
      <Footer/>
    </>
  );
};

export default UserDashboard;
