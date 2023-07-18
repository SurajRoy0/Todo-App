import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGODB_URL;

export async function POST(req, res) {
    const body = await req.json();
    console.log(body);
    const client = await MongoClient.connect(mongoUrl);

    const db = client.db();
    const todoCollection = db.collection("todos");
    const result = await todoCollection.insertOne(body);
    console.log(result);

    client.close();
    return new Response(JSON.stringify({ message: "New Todo Inserted!" }));
}

export async function GET(req, res) {
    const client = await MongoClient.connect(mongoUrl);

    const db = client.db();
    const todoCollection = db.collection("todos");
    const result = await todoCollection.find().toArray();
    console.log(result);

    client.close();
    return new Response(JSON.stringify({ result: result }));
}
