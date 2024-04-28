const user = require("../models/usersModel.js");

const getAllusers = async (req, res) => {
  try {
    const items = await user.find();
    res.status(200).json({
      status: "passed",
      users: [items],
    });
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

const adduser = async (req, res) => {
  try {
    const userObj = req.body;
    const items = await user.create(userObj);
    res.status(200).json({
      status: "passed",
      users: [items],
    });
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

const replaceuser = async (req, res) => {
  try {
    const Uid = req.params.name;
    const obj = await user.findOneAndReplace({ name: Uid }, req.body);
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const userobj = req.body;
    const obj = await user.findByIdAndUpdate(id, userobj);
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

const deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    const obj = await user.findByIdAndDelete({ _id: id })
    res.status(200).json(obj);
  } catch {
    res.status(501).json({
      status: "failed",
    });
  }
};

module.exports = {
  getAllusers,
  adduser,
  replaceuser,
  updateuser,
  deleteuser
};
