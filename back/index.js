import {ApolloServer, gql} from 'apollo-server'
import axios from "axios";

const personajes = [
    {
        name: "Rick",

    },
    {
        name: "Morty"
    }
]

const typeDefs = gql `
    type personajes{
        name: String!
    }

    type Query{
        cantpersonajes: Int!
        todospersonajes: [personajes]!
    }
`

const resolvers = {
    Query:{
        cantpersonajes: ()=>personajes.length,
        todospersonajes: async (root, args)=>{
            const {data: personajesdeapi} = await axios.get("https://rickandmortyapi.com/api/character")
            return personajesdeapi.results
        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });