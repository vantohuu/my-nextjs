const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    try {
        let { db } = await connectToDatabase();
        let products = await db
            .collection('product').find({}).toArray();
        return res.json(products)
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

