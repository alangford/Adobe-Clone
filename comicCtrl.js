/**
 * Created by beebe on 5/19/2017.
 */
const moment = require("moment"),
    config = require(`./.config.js`),
    crypto = require('crypto'),
    axios = require(`axios`);

module.exports = {

    // getComics:(req,res,next)=>{
    //     let now = new Date().getTime();
    //     let hmac = crypto.createHash('md5').update(now + config.marvelSecretKey + "f9d98ff9edde5d45419cdb657cae4aba").digest('hex');
    //     console.log(`http://gateway.marvel.com/v1/comics?ts=${now.toString()}&apikey=${config.marvelPublicKey}&hash=${hmac}`);
    //     axios.get(`http://gateway.marvel.com/v1/comics?ts=${now}&apikey=${config.marvelPublicKey}&hash=${hmac}`).then(response=>{
    //         console.log(response)
    //         res.status(200).json(response)
    //     })
    // }
};