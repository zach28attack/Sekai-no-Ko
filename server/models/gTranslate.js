const {Translate} = require("@google-cloud/translate").v2;
const projectId = "perceptive-seat-399517";
const translate = new Translate({projectId});

class Google {
  constructor(text) {
    this.text = text;
  }
  async translateText() {
    const target = "en";
    const text = this.text;
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    return translations[0];
  }
}

module.exports = Google;
