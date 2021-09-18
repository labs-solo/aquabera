import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import fetch from 'cross-fetch';
import { InputUtils } from 'utils/inputUtils';

const APP_SYNC_URL = process.env.APP_SYNC_URL || process.env.GATSBY_APP_SYNC_URL;
const APP_SYNC_API_KEY = process.env.APP_SYNC_API_KEY || process.env.GATSBY_APP_SYNC_API_KEY;

if (!APP_SYNC_URL) {
  throw new Error('To continue set the APP_SYNC_URL environment variable');
}
if (!APP_SYNC_API_KEY) {
  throw new Error('To continue set the GATSBY_APP_SYNC_API_KEY environment variable');
}

const httpLink = createHttpLink({
  uri: APP_SYNC_URL,
  fetch
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': APP_SYNC_API_KEY,
    }
  };
});


const errorLink = onError((errorResponse) => {

  if (errorResponse.graphQLErrors) {
    try {
      errorResponse.graphQLErrors.map(({ message, locations, path }, _index) => {
        const variables = JSON.stringify(errorResponse.operation.variables);
        const locs = JSON.stringify(locations);
        const errorMessage = `Error occurred for OperationName: ${errorResponse.operation.operationName}, at Path: ${path}, at Location: ${locs}, Message: ${message}`;
        const extra = {
          query: errorResponse.operation.query.loc?.source.body,
          variables: variables
        };

        const messageSplit = message ? message.split(/\r?\n/) : [];
        const messageFirstLine = InputUtils.isTruthy(messageSplit) ? messageSplit[0] : ``;

        // The messageFirstLine that we are passing as a constructor variable get's ultimately
        // translated to the problemId in AI, which is what we want.
        const error = new Error(messageFirstLine);
        // error.name get's mapped to AI details[0].type
        error.name = errorResponse.operation.operationName;
        // error.stack gets mapped in AI to details[0].rawStack
        error.stack = errorMessage; // graphQLErrors[index].stack;

      });
    } catch (error) {
      console.error('Could not log graphql error', error);
    }
  }
});


export const apolloClient = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache()
});
