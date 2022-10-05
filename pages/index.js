import Link from "next/link";
import Category from "../components/Home/Category";
import Hero from "../components/Home/Hero";
import PromoSection from "../components/UI/PromoSection";
import ProductList from "../components/Products/ProductList"

export default function Home() {
  return (
    <>
      <Hero />
      <Category/>
      <PromoSection/>
      <ProductList/>
    </>
  );
}
