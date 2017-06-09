const express = require(`express`),
    app = express(),
    cors = require(`cors`),
    bodyParser = require(`body-parser`),
    corsOptions = {origin: 'http://localhost:3041'},
    config = require(`./.config.js`),
    crypto = require('crypto'),
    hmac = crypto.createHash('md5').update(config.marvelSecretKey + "f9d98ff9edde5d45419cdb657cae4aba").digest('hex');


    // massiveInstance = massive.connectSync({connectionString: config.connectionString});
//     app.set("db", massiveInstance);
// const db = app.get(`db`);
console.log(hmac)
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(`build`));

// app.get(`/api/comics`, comicCtrl.getComics);


app.listen(3041,()=>{
    console.log(`Wub a dub dub on 3041 morty`)
});