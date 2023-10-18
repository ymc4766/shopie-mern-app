import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="border  shadow-lg  h-[500px]">
      <img
        src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt={product.name}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 ">
        <div className="flex  flex-col space-y-3">
          <h2 className="text-2xl font-semibold">{product?.name}</h2>
          <p className="text-gray-600 mb-2 text-xl">${product?.price}</p>
          <p className="text-gray-700">
            {product?.description?.substring(0, 100)}{" "}
            <Link to={`/product/${product._id}`}>
              <button className="px-4 bg-orange-500  text-center text-lime-100 py-2 rounded-lg">
                See more
              </button>
            </Link>
          </p>
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
