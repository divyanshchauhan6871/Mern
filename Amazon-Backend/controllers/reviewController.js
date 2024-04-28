const review = require("../models/reviewsModel");

const getAllreviews = async (req, res) => {
  try {
    const items = await review.find();
    res.status(200).json({
      status: "passed",
      reviews: [items],
    });
  } catch {
    res.status(501).json({
      status: "failed in fetching",
    });
  }
};

const addreview = async (req, res) => {
  try {
    const reviewObj = req.body;
    const items = await review.create(reviewObj);
    res.status(200).json({
      status: "passed",
      reviews: [items],
    });
  } catch {
    res.status(501).json({
      status: "failed in inserting your review",
    });
  }
};

const replacereview = async (req, res) => {
  try {
    const Uid = req.params.name;
    const obj = await review.findOneAndReplace({ name: Uid }, req.body);
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

const updatereview = async (req, res) => {
  try {
    const id = req.params.id;
    const reviewobj = req.body;
    const obj = await review.findByIdAndUpdate(id, reviewobj);
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

const deletereview = async (req, res) => {
  try {
    const id = req.params.id;
    const obj = await review.findByIdAndDelete({ _id: id })
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

module.exports = {
  getAllreviews,
  addreview,
  replacereview,
  updatereview,
  deletereview
};
