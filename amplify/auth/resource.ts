import { type ClientSchema, a, defineData, defineAuth } from '@aws-amplify/backend';

const schema = a.schema({
  User: a.model({
    email: a.string(),
    isSubscribed: a.boolean(),
    subscriptionEndDate: a.string(),
  }).authorization(allow => [allow.owner()]),
});

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    "custom:isSubscribed": {
      mutable: true,
      dataType: "Boolean"
    },
    "custom:subscriptionEndDate": {
      mutable: true,
      dataType: "DateTime"
    },
  },
});
