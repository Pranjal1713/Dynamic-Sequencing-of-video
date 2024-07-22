const mongoose = require('mongoose')

module.exports = () => {
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology :true,
    }

    mongoose.connect(process.env.DB, connectionParams)
        .then(() => {
            console.log("Connection to the database is successful");
        })
        .catch((error) => {
            console.error("Error connecting to database:", error);
        });


}