const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jd7el.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        // Connect to the 'users' collection
        const userCollection = client.db("neighborHub").collection("users");

        // Route to get all users
        app.get("/workers", async (req, res) => {
            let query = {
                services: {$ne:""}
            };
            try {
                const cursor = userCollection.find(query);
                const users = await cursor.toArray();
                res.status(200).json(users); 
            } catch (error) {
                console.error("Error fetching users:", error);
                res.status(500).json({ error: "Server error" });
            }
        });

        // login
        app.post("/login", async (req, res) => {
            const user = req.body;
            const cursor = userCollection.find(user);
            const result = await cursor.toArray(); 
            res.status(200).json(result);
        })
        // Route to add a new user
        app.post("/users", async (req, res) => {
            try {
                const user = req.body;
                const result = await userCollection.insertOne(user);
                res.status(201).json(result);
            } catch (error) {
                console.error("Error inserting user:", error);
                res.status(500).json({ error: "Server error" });
            }
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Call the run function to connect and initialize the server
run().catch(console.dir);

// Route for the root
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
