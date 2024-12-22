import Product from "../models/product_model.js";

// Utility function to handle errors
function handleError(res, error, statusCode = 500) {
  return res
    .status(statusCode)
    .json({ error: error.message || "Server Error" });
}

export async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find({});
    return res.status(200).json(allProducts);
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getProductOnQuery(req, res) {
  const {
    searchTerm = "",
    startIndex = 0,
    limit = 9,
    order = "desc",
  } = req.query;
  const pageIndex = parseInt(startIndex) || 0;
  const pageLimit = parseInt(limit) || 9;
  const sortDirection = order === "asc" ? 1 : -1;

  // Validate query parameters
  if (isNaN(pageIndex) || isNaN(pageLimit)) {
    return res.status(400).json({ error: "Invalid pagination parameters." });
  }

  try {
    // Construct the query based on searchTerm
    const query = searchTerm
      ? {
          $or: [
            { name: { $regex: searchTerm, $options: "i" } },
            { category: { $regex: searchTerm, $options: "i" } },
            { description: { $regex: searchTerm, $options: "i" } },
          ],
        }
      : {}; // If no searchTerm, return all products

    // Fetch the products with sorting, pagination, and search
    const products = await Product.find(query)
      .sort({ updatedAt: sortDirection })
      .skip(pageIndex * pageLimit)
      .limit(pageLimit);

    // Return the response with the fetched products
    res.status(200).json(products);
  } catch (err) {
    return handleError(res, err);
  }
}
