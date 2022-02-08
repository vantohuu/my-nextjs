import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb+srv://vantohuu:huu1234567@cluster0.kpme0.mongodb.net/nextjsdb?retryWrites=true&w=majority"
const MONGO_DB ="nextjsdb"

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {



    if (cachedClient && cachedDb)
    {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }
    
    
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    let client = new MongoClient(MONGO_URI, opts);
    await client.connect();

    let db = client.db(MONGO_DB);
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}