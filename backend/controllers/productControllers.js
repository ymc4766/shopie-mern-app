import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
  const resPerPage = 3;
  const apifilters = new APIFilters(Product, req.query).search().filters();
  apifilters.pagination(resPerPage);

  let products = await apifilters.query;
  products = await apifilters.query.clone();

  // const products = await Product.find({});
  res.status(200).json({
    message: "All Products",
    count: products.length,
    products,
  });
});

export const createProduct = async (req, res) => {
  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  await product.save();
  res.status(200).json(product);
};

export const getProductDetails = asyncHandler(async (req, res, next) => {
  const { id: id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("product not Found! ", 404));
    // return res.status(404).json({ msg: `No task with id :${id}` });
  }

  res.status(200).json({
    product,
  });
});

export const updateProduct = async (req, res) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    message: "Product Deleted",
  });
};
