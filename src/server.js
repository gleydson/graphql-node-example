const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gleydsonsr:123@cluster0-j2pz7.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start()