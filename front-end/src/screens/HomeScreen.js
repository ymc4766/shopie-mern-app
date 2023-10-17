import React from "react";
import { useGetProductsQuery } from "../redux/api/productsApi";
import Product from "../components/Product";

const HomeScreen = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="py-3 px-5">
      <div className="flex items-center space-x-3">
        {data?.products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
