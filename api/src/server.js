const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
  typeDefs, 
  resolvers, 
  context() {
    const user = models.User.findOne();
    return {models, db, user};
  }});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
