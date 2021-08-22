import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../services/products";
import { TopNav } from "./TopNav";
import { ProductList } from "./ProductList";
import "./Product.css";

export const Home = () => {
  const dispatch = useDispatch();
  const [pr, setPr] = useState([]);
  const allProducts = async () => {
    const products = await getProducts();
    console.log("---===---->>>>>>", products);
    setPr([...products]);
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <TopNav />
      {pr && <ProductList />}
    </div>
  );
};
