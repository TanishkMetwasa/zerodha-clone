const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config();
const mongoose = require('mongoose');
const { UserModel } = require('./model/UserModel');

async function checkUsers() {
  try {
    const uri = process.env.MONGODB_URI || process.env.MONGODB_URL;
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas!");

    const users = await UserModel.find({}, { password: 1, email: 1, username: 1, createdAt: 1 });
    console.log(`\n================= USERS IN DATABASE (${users.length}) =================`);
    if (users.length === 0) {
      console.log("No registered users yet. Sign up on the frontend to create one!");
    } else {
      users.forEach((u, i) => {
        console.log(`\nUser #${i + 1}:`);
        console.log(`ID:       ${u._id}`);
        console.log(`Username: ${u.username}`);
        console.log(`Email:    ${u.email}`);
        console.log(`Password: ${u.password.substring(0, 20)}... (Bcrypt Hashed)`);
        console.log(`Created:  ${u.createdAt}`);
      });
    }
    console.log("========================================================\n");
    process.exit(0);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
}

checkUsers();
