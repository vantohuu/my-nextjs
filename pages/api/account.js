const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    try {
        let { db } = await connectToDatabase();
        let accounts = await db
            .collection('account').find({}).toArray();
        return res.json(accounts)
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


