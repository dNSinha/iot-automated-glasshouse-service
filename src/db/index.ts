const MongoClient = require("mongodb").MongoClient;
import { dboType } from '../types/user';
import { applicationConstants } from '../components/applicationConstants';

// export const glasshouse = async (req, res, next) => {
//     const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     try {
//         await client.connect();
//         const db = client.db("glasshousedb");
//         const collection = db.collection("glasshouse");
        
//         res.responseData.dataUpload = await collection.insertOne(req.body);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// };

let dbo: dboType;

const init = async () => {
    try {
        MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
            if (err) {
                throw err
            } else {
                console.log('Mongo db connected')
                dbo = db.db(applicationConstants.database)
            }
        });
    } catch (err) {
        console.log('Error while initializing mongodb')
    }
}

const getSensorValues = async (query) => {
    try {
        const result = await dbo.collection(applicationConstants.collection).find(query).toArray()
        return result
    } catch (err) {
        throw err
    }
}

const getLastSensorValues = async (query) => {
    try {
        const result = await dbo.collection(applicationConstants.collection).find(query).sort({_id:-1}).limit(1).toArray()
        return result
    } catch (err) {
        throw err
    }
}

const uploadSensorValues = async (data) => {
    try {
        const sensorUpload = await dbo.collection(applicationConstants.collection).insertOne(data)
        return sensorUpload;
    } catch (err) {
        throw err
    }
}

export const db = { init, getSensorValues, getLastSensorValues, uploadSensorValues };
