import {gql} from 'apollo-boost'
export const getMovie = gql `
{
 movies {
     id
     title
  }
}
`
export const getMovieDetail = gql `
     query Movie($id: Int!) {
      movie(id: $id) {
        id
        title
    }
  }

`
// query User($_id: ID!) {
//   getUser(_id: $_id) {
//     _id

//   }
// }