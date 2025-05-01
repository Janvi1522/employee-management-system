const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

const typeDefs = require('./schema/employeeSchema');
const resolvers = require('./resolvers/employeeResolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

MONGO_URI = "mongodb+srv://janvical15:TzbBe5ZCJ2fIZGNi@cluster0.pks93aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log("Error connecting to MongoDB:", err));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000' + server.graphqlPath);
});


