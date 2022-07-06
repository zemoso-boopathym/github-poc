const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    User: User!
    Following: [Following]
    Followers: [Followers]
    Email: [Email!]!
    UserInfo: UserInfo
  }
  type User {
    login: String!
    id: Int!
    node_id: String!
    avatar_url: String!
    gravatar_id: String!
    url: String!
  }
  type UserInfo {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
  }
  type Following {
    login: String!
    id: Int
    node_id: String!
    gravatar_id: String!
    url: String
    followers_url: String!
    following_url: String!
    starred_url: String!
    subscriptions_url: String!
    type: String!
    site_admin: Boolean!
  }
  type Email {
    email: String!
    verified: Boolean!
    primary: Boolean!
    visibility: String
  }
  type Followers {
    login: String!
    id: Int
    url: String
    followers_url: String!
    following_url: String!
    repos_url: String!
    type: String!
    site_admin: Boolean!
  }
`;
