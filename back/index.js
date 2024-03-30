import {ApolloServer, gql} from 'apollo-server'
import axios from "axios";


const typeDefs = gql `
    type personajes{
        id: ID!
        name: String!
        status: String!
        species: String!
        gender: String!
        image: String
    }

    type Query{
        todospersonajes: [personajes]!
    }
`

const resolvers = {
    Query: {
        todospersonajes: async (root, args) => {
            let page = 1;
            const result = [];

            const allchar = async (page) => {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                return data;
            };

            let response = await allchar(page);

            while (response.info.next) {
                result.push(...response.results);
                page++;
                response = await allchar(page);
            }

            return result;
        }
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });