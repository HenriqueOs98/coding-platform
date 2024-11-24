import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    "custom:isSubscribed": {
      mutable: true,
      dataType: "String"
    },
    "custom:subscriptionEndDate": {
      mutable: true,
      dataType: "String"
    },
  },
});
