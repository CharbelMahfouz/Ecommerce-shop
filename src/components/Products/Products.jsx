import React, { useEffect } from "react";
import Product from "./Product/Product";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/products";
import { useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div
        id="products-container"
        className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative z-40 md:-mt-40 lg:-mt-56 xl:-mt-60 container mx-auto "
      >
        {products &&
          products
            .slice(0, 4)
            .map((product) => <Product key={product.id} product={product} />)}

        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          alt="banner-img"
          className="w-full md:col-span-full"
        />

        <div className="md:col-span-2">
          {products &&
            products
              .slice(4, 5)
              .map((product) => <Product key={product.id} product={product} />)}
        </div>
        {products &&
          products
            .slice(5, products.length)
            .map((product) => <Product key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default Products;
