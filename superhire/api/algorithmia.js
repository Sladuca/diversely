const Algorithmia = require("algorithmia");

const input = {
  "document": "I really like Algorithmia!"
};
Algorithmia.client("sim0i+TVuSQrTMRFYj1JPB+Bmyc1")
  .algo("nlp/SentimentAnalysis/1.0.5?timeout=300") // timeout is optional
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });

  export default Algo;