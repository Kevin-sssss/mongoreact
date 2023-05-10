const mongoose = require('mongoose');
const url = "mongodb+srv://kevinzamjim:kevin@gameback.velru0f.mongodb.net/?retryWrites=true&w=majority";
const connectToDB = async () => {

mongoose.set('strictQuery', true);
 await mongoose .connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 }  ).then((db) => {
console.log('Database connection stablished.'); });

};

module.exports = connectToDB;