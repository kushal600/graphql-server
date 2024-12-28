### Learning GraphQL

- 1. Intialize pacakeg.json from following command
```bash
npm init -y
```

- 2. Run following command for getting ES 6,
```bash
npm pkg set type="module"
```

- 3. install GraphQL packages
```bash
npm install @apollo/server graphql
```
 - 4. make a index.js and start server  from 
 ```bash
 nodemon index.js
 ```

### Watch All Queries from Below

QUERY 1 => RETRIEVE ALL Games
```bash
query Games{
  games {
    id
    platform
    title
  }
}

```

Query 2 => RETRIEVE ALL Authors
```bash
query Authors{
  authors {
    id
    name
    verified
  }
}
```

QUERY 3 => RETRIEVE ALL Reviews
```bash
query Reviews{
  reviews {
    id
    content
    rating
  }
}
```

QUERY 4 => Author Query (find author's review about 
games from author id);
```bash
query AuthorQuery($authorId: ID!){
  author(id: $authorId) {
    id
    name
    verified
    reviews {
      content
      rating
    }
  }
}
```

Place this in variables
```bash
{
  "authorId": "1"
}
```

QUERY 5 => Review Query (find author and game from review id);
```bash
query ReviewQuery($reviewId: ID!){
  review(id: $reviewId) {
    content
    id
    rating
    author {
      id
      name
    }
    game {
      id
      platform
      title
    }
  }
}
```

Place this in variables
```bash
{
  "reviewId": "1"
}
```

Query 6 => Game Query (from game id retrieve all reviews of game and author of reviews)

```bash
query GameQuery($gameId: ID!) {
  game(id: $gameId) {
    id
    platform
    title
    reviews {
      content
      rating
      author {
        id
        name
      }
    }
  }
}
```

Place this in variables
```bash
{
  "gameId": "1"
}
```

### Watch All Mutaion from Below

MUTATION 1 => DELETE GAME FROM GAME ID 
```bash
mutation DeleteGame($deleteGameId: ID!){
  deleteGame(id: $deleteGameId) {
    id
    platform
    title
  }
}
```

Place this in variables
```bash
{
  "deleteGameId": "2"
}
```

MUTATION 2 => ADD GAME FROM USER
```bash
mutation AddGame($game: AddGameInput){
  addGame(game: $game) {
    id
    platform
    title
  }
}
```

Place this in variables
```bash
{
  "game": {
    "title": "AGE OF EMPIRES 2 DEFINITIVE ADDITION",
    "platform" : ["STEAM","XBOX"]
  }
}
```

MUTATION 3 => UPDATE GAME 
```bash
mutation UpdateGame($updateGameId: ID!, $updateGameEdits2: EditGamesInput){
  updateGame(id: $updateGameId,edits: $updateGameEdits2) {
    id
    platform
    title
  }
}
```

Place this in variables
```bash
{
  "updateGameId": "1",
  "updateGameEdits2": {
    "platform" : [
      "MAC",
      "Xbox"
    ],
  } 
}
```

MUTATION 4 => DELETE AUTHOR
```bash
mutation DeleteAuthor($deleteAuthorId: ID!){
  deleteAuthor(id: $deleteAuthorId) {
    id
    name
    verified
  }
}
```

Place this in variables
```bash
{
  "deleteAuthorId": "2"
}
```

MUTATION 5 => ADD AUTHOR
```bash
mutation AddAuthor($author: addAuthorInput){
  addAuthor(author: $author) {
    id
    name
    verified
  }
}
```

Place this in variables
```bash
{
  "author": {
    "name": "KUSHAL",
    "verified": false
  }
}
```

MUTATION 6 => UPDATE AUTHOR
```bash
mutation UpdateAuthor($updateAuthorId: ID!, $edits: EditAuthorInput){
  updateAuthor(id: $updateAuthorId,edits: $edits) {
    id
    name
    verified
  }
}
```

Place this in variables
```bash
{
  "updateAuthorId": "2",
  "edits": {
    "name": "KUSHAL",
    "verified": true
  }
}
```

MUTATION 7 => DELETE REVIEW
```bash
mutation DeleteReview($deleteReviewId: ID!){
  deleteReview(id: $deleteReviewId) {
    id
     content
     rating
  }
}
```

Place this in variables
```bash
{
  "deleteReviewId": "2"
}
```

MUTATION 8 => ADD REVIEW
```bash
mutation AddReview($review: AddReviewInput){
  addReview(review: $review) {
    content
    id
    rating
  }
}
```

Place this in variables
```bash
{
  "review": {
    "content": "KUSHAL's Review on age of empires",
    "rating": 8,
    "authorId": "2",
    "gameId": "2"
  }
}
```

MUTATION 9 => UPDATE REVIEW
```bash
mutation UpdateReview($updateReviewId: ID!, $edits: EditReviewInput){
  updateReview(id: $updateReviewId,edits: $edits) {
    id
    rating
    content
  }
}
```

Place this in variables
```bash
{
  "updateReviewId": "2",
  "edits": {
    "content": "KUSHAL UPDATE REVIEW",
    "rating": 999
  }
}
```

---

## Author

- **Kushal Shahpatel**  
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/shahpatel-kushal-4a4a901b6/)  
- GitHub: [GitHub Profile](https://github.com/kushal600)

---
