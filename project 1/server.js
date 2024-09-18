const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors"); // Un-comment this

const app = express();
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const user_model = require("./models/user.model");

// Configure CORS (enable it)
const corsOptions = {
  origin: "http://localhost:5173", // Ensure this matches your frontend URL
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS", // Include OPTIONS for preflight requests
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions)); // Enable the CORS middleware

// Middleware to parse JSON requests
app.use(express.json());

// CORS headers configuration (not necessary if `cors` is enabled but kept for more control)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Update if your frontend is on a different port
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    if (req.method === "OPTIONS") {
        res.sendStatus(204); // Respond with 204 to preflight requests
    } else {
        next();
    }
});

// Routes
app.use("/ecomm/api/v1/auth/signup", require("./routes/auth.routes"));
app.use("/ecomm/api/v1/categories", require("./routes/category.routes"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Connection with MongoDB
mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to MongoDB");
});
db.once("open", () => {
    console.log("Connected to MongoDB");
    init();
});

async function init() {
    let user = await user_model.findOne({ userId: "admin" });

    if (user) {
        console.log("Admin is already present");
        return;
    }

    try {
        user = await user_model.create({
            name: "Sachin",
            userId: "admin",
            email: "kaushl@getMaxListeners.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("welcome", 8)
        });
        console.log("Admin created", user);
    } catch (err) {
        console.log("Error while creating admin", err);
    }
}

// Start the server
app.listen(server_config.PORT, () => {
    console.log("Server started at port num:", server_config.PORT);
});
