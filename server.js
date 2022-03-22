const express = require("express")
const path = require("path")
const { ApolloServer }= require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray =loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'));

async function startApolloServer(){
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs: [typesArray],
        resolvers: resolversArray
    });
    // contains all the middleware and logic to hangle incoming graphql requests
    const server = new ApolloServer({
        
        schema
    });
    await server.start();
           server.applyMiddleware({app,path:'/graphql'})
    
           app.listen(3000, () => {
        console.log("Running on 3000...");
    });
}

startApolloServer();