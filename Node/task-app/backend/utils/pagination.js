import mongoose from "mongoose";

export async function paginate(
  model,
  query,
  page = 1,
  pageSize = 10,
  populateField
) {
  const skip = (page - 1) * pageSize;

  const records = await mongoose
    .model(model)
    .find(query)
    .populate(...populateField)
    .sort({ createdAt: "desc" })
    .skip(skip)
    .limit(pageSize)
    .exec();

  const totalCount = await mongoose.model(model).countDocuments(query.where);
  const totalPages = Math.ceil(totalCount / pageSize);

  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return {
    currentPage: page,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage: hasNextPage ? page + 1 : null,
    prevPage: hasPrevPage ? page - 1 : null,
    records,
  };
}
