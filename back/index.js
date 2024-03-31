import { ApolloServer, gql } from 'apollo-server';
import axios from 'axios';

const typeDefs = gql`
    type Personaje {
        id: ID!
        name: String!
        status: String!
        species: String!
        gender: String!
        image: String
        type: String
        originName: String
        locationName: String
    }

    type Query {
        todospersonajes: [Personaje]!
    }
`;

const resolvers = {
    Query: {
        todospersonajes: async () => {
            let page = 1;
            const result = [];

            const fetchCharacters = async (page) => {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                return data;
            };

            let response = await fetchCharacters(page);

            while (response.info.next) {
                result.push(...response.results);
                page++;
                response = await fetchCharacters(page);
            }

            return result.map(character => ({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                image: character.image,
                type: character.type,
                originName: character.origin.name,
                locationName: character.location.name
            }));
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
