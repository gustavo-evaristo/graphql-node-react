import "reflect-metadata";
import path from 'path';
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./resolvers/userResolvers";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.join(__dirname, '..', 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen(3333);

  console.log(`server running on ${url}`)
}


main();