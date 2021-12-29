const MongoClient = require("mongodb").MongoClient;

export const glasshouse = async (req, res, next) => {
    const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const db = client.db("glasshousedb");
        const collection = db.collection("glasshouse");
        
        res.responseData.dataUpload = await collection.insertOne(req.body);
        next();
    } catch (error) {
        return next(error);
    }
};
