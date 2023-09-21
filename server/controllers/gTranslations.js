const Google = require("../models/gTranslate");

exports.getTranslation = async (req, res) => {
  const google = new Google();
  google.text = req.params.text;
  const translation = await google.translateText();
  console.log(translation);

  if (translation !== undefined) {
    res.status(200).json({message: "Successful Translation", translation: translation});
  }
};
