import { GraphQLClient } from 'graphql-request';

export const request = ({ query, variables, preview }) => {
    const ENDPOINT = 'https://nifty-rub.eu-central-1.aws.cloud.dgraph.io/graphql';

    const client = new GraphQLClient(ENDPOINT, {
      headers: {
        xAuthToken: process.env.GRAPHQL_KEY,
      }
    })
    return client.request(query, variables)
  }