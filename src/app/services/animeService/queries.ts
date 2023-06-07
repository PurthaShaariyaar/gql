// GraphQL Queries
import gql from 'graphql-tag'

// Retrieve anime details
export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        description
        title {
          english
        }
        coverImage {
          medium
        }
      }
    }
  }
`;
