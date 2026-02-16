import { Amplify } from "aws-amplify";
 
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "eu-central-1_FRaUQyexi",
      userPoolClientId: "5akrlpuadre26ddi7vrbom2q6t",
      region: "eu-central-1"
    }
  }
});