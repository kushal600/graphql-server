// ! means required
// [String] means array of strings
// ID! means unique identifier

export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query{
        games: [Game]
        game(id: ID!): Game
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation{
        deleteGame(id: ID!): [Game]
        addGame(game:AddGameInput): Game
        updateGame(id: ID!, edits: EditGamesInput): Game
        deleteReview(id: ID!): [Review]
        addReview(review:AddReviewInput): Review
        updateReview(id: ID!, edits: EditReviewInput): Review
        deleteAuthor(id: ID!): [Author]
        addAuthor(author: addAuthorInput): Author
        updateAuthor(id: ID!, edits: EditAuthorInput): Author
    }
    input AddGameInput{
        title: String!
        platform: [String!]!
    }
    input EditGamesInput{
        title: String
        platform: [String!]
    }
    input AddReviewInput{
        rating: Int!
        content: String!
        authorId: ID!
        gameId: ID!
    }
    input EditReviewInput{
        rating: Int
        content: String
    }
    input addAuthorInput{
        name: String!
        verified: Boolean!
    }
    input EditAuthorInput{
        name: String
        verified: Boolean
    }
`;