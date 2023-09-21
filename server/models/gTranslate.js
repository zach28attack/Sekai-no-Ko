const {Translate} = require("@google-cloud/translate").v2;
const projectId = "perceptive-seat-399517";
const translate = new Translate({projectId});
const API_KEY = "AIzaSyA-JiE1zSDp8JBJkAV1A2BarTz6cmuoRfE";

class Google {
  constructor(text) {
    this.text = text;
  }
  async translateText() {
    const target = "en";
    const text = this.text;
    let [translations] = await translate.translate(text, target);

    translations = Array.isArray(translations) ? translations : [translations];
    translations.forEach((translation, i) => {
      console.log(`${text} => (${target}) ${translation}`);
    });
    return translations[0];
  }
}

module.exports = Google;
