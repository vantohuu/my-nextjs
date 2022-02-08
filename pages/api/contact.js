const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            {
                return getContact(req, res);
            }

        case 'POST':
            {
                return addContact(req, res);
            }
        case 'PUT':
            {
                return updateContact(req, res);
            }
        case 'DELETE':
            {
                return deleteContact(req, res);
            }
    }
}

async function getContact(req, res) {
    try {
        let { db } = await connectToDatabase();
        let contacts = await db
            .collection('contact').find({}).toArray();
        return res.json(contacts)
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function addContact(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('contact').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
            log: req.body,
        });
    }
}


async function updateContact(req, res) {
    
    try {
        let { db } = await connectToDatabase();
        let oj = JSON.parse(req.body);
        console.log(oj);
        await db.collection('contact').updateOne(
            {
                _id: new ObjectId(oj._id),
            }, 
            { $set: { key : oj.key, email: oj.email, phone: oj.phone, face : oj.face }},
        );
        console.log('updated successfully')
        return res.json({
            message: 'updated successfully',
            success: true,
        });
    } catch (error) {
        console.log(new Error(error).message);
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function deleteContact(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('contact').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}