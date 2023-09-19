const Google = require("../models/gTranslate");

exports.getTranslation = async (req, res) => {
  console.log(req.params);
  res.status(200).json({message: "Successful Call"});
};
