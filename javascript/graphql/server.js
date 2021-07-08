const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const obj = require('./src/schema.js');

let port = 3000;

let app = express();
app.use('/', graphqlHTTP({
  schema: obj.schema,
  rootValue: obj.root,
  graphiql: true
}));
app.listen(port, () => console.log('Express GraphQL Server Now Running On localhost:'+port));
