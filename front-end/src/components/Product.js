const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={product?.images[0]?.url}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{product?.name}</h2>
        <p className="text-gray-600 mb-2">${product?.price}</p>
        <p className="text-gray-700">{product?.description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
