const express = require("express")
const path = require("path")
const { graphqlHTTP } = require("express-graphql") //express middleware function responds to graphql queries
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray =loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
    typeDefs:[typesArray]
})

const root = {
    products: require("./products/produces.model"),
    orders : require('./orders/orders.model')

};

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Running on 3000...");
});