import React from "react";
import { useGetProductsQuery } from "../redux/api/productsApi";
import Product from "../components/Product";

const HomeScreen = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="py-3 px-5">
      <div className="grid lg:grid-cols-4 gap-6 ">
        {data?.products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
