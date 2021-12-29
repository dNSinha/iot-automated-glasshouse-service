// import express from 'express';
// const MongoClient = require("mongodb").MongoClient;
// const app = express();

// const connectDB = async () => {
//     const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         const db = client.db("glasshousedb");
//         app.locals.db = db;

//         console.log(`MongoDB Connected: ${client?.connection?.host}`)
//     } catch (err) {
//         console.error(err)
//         process.exit(1)
//     }
// }

// export { connectDB };
const MongoClient = require('mongodb').MongoClient

class Connection {

    static async open() {
        if (this.db) return this.db
        this.db = await MongoClient.connect(this.url, this.options)
        return this.db
    }

}

Connection.db = null
Connection.url = process.env.MONGODB_URL
Connection.options = {
    bufferMaxEntries: 0,
    reconnectTries: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

module.exports = { Connection }