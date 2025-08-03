import {
  DEFAULT_SERVICE_CLIENT_API_CONFIG,
  PasskeyErrorCode,
  assertAuthTokens,
  assertCredentialIsPkcWithAuthenticatorAttestationResponse,
  assertPasskeyError,
  assertValidCredentialCreationOptions,
  cognitoUserPoolTransferHandler,
  createCognitoUserPoolEndpointResolver,
  createUserPoolDeserializer,
  createUserPoolSerializer,
  deserializeJsonToPkcCreationOptions,
  getAuthUserAgentValue,
  getIsPasskeySupported,
  getRegionFromUserPoolId,
  handlePasskeyRegistrationError,
  serializePkcWithAttestationToJson
} from "./chunk-NE3RA3M4.js";
import {
  Amplify,
  AuthAction,
  assertTokenProviderConfig,
  composeServiceApi,
  fetchAuthSession2 as fetchAuthSession
} from "./chunk-ZK2US4EJ.js";
import {
  __async,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@aws-amplify/auth/dist/esm/client/utils/passkey/registerPasskey.mjs
var registerPasskey = (input) => __async(null, null, function* () {
  try {
    const isPasskeySupported = getIsPasskeySupported();
    assertPasskeyError(isPasskeySupported, PasskeyErrorCode.PasskeyNotSupported);
    const passkeyCreationOptions = deserializeJsonToPkcCreationOptions(input);
    const credential = yield navigator.credentials.create({
      publicKey: passkeyCreationOptions
    });
    assertCredentialIsPkcWithAuthenticatorAttestationResponse(credential);
    return serializePkcWithAttestationToJson(credential);
  } catch (err) {
    throw handlePasskeyRegistrationError(err);
  }
});

// node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createStartWebAuthnRegistrationClient.mjs
var createStartWebAuthnRegistrationClient = (config) => composeServiceApi(cognitoUserPoolTransferHandler, createUserPoolSerializer("StartWebAuthnRegistration"), createUserPoolDeserializer(), __spreadValues(__spreadValues({}, DEFAULT_SERVICE_CLIENT_API_CONFIG), config));

// node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createCompleteWebAuthnRegistrationClient.mjs
var createCompleteWebAuthnRegistrationClient = (config) => composeServiceApi(cognitoUserPoolTransferHandler, createUserPoolSerializer("CompleteWebAuthnRegistration"), createUserPoolDeserializer(), __spreadValues(__spreadValues({}, DEFAULT_SERVICE_CLIENT_API_CONFIG), config));

// node_modules/@aws-amplify/auth/dist/esm/client/apis/associateWebAuthnCredential.mjs
function associateWebAuthnCredential() {
  return __async(this, null, function* () {
    const authConfig = Amplify.getConfig().Auth?.Cognito;
    assertTokenProviderConfig(authConfig);
    const {
      userPoolEndpoint,
      userPoolId
    } = authConfig;
    const {
      tokens
    } = yield fetchAuthSession();
    assertAuthTokens(tokens);
    const startWebAuthnRegistration = createStartWebAuthnRegistrationClient({
      endpointResolver: createCognitoUserPoolEndpointResolver({
        endpointOverride: userPoolEndpoint
      })
    });
    const {
      CredentialCreationOptions: credentialCreationOptions
    } = yield startWebAuthnRegistration({
      region: getRegionFromUserPoolId(userPoolId),
      userAgentValue: getAuthUserAgentValue(AuthAction.StartWebAuthnRegistration)
    }, {
      AccessToken: tokens.accessToken.toString()
    });
    assertValidCredentialCreationOptions(credentialCreationOptions);
    const cred = yield registerPasskey(credentialCreationOptions);
    const completeWebAuthnRegistration = createCompleteWebAuthnRegistrationClient({
      endpointResolver: createCognitoUserPoolEndpointResolver({
        endpointOverride: userPoolEndpoint
      })
    });
    yield completeWebAuthnRegistration({
      region: getRegionFromUserPoolId(userPoolId),
      userAgentValue: getAuthUserAgentValue(AuthAction.CompleteWebAuthnRegistration)
    }, {
      AccessToken: tokens.accessToken.toString(),
      Credential: cred
    });
  });
}

// node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createListWebAuthnCredentialsClient.mjs
var createListWebAuthnCredentialsClient = (config) => composeServiceApi(cognitoUserPoolTransferHandler, createUserPoolSerializer("ListWebAuthnCredentials"), createUserPoolDeserializer(), __spreadValues(__spreadValues({}, DEFAULT_SERVICE_CLIENT_API_CONFIG), config));

// node_modules/@aws-amplify/auth/dist/esm/foundation/apis/listWebAuthnCredentials.mjs
function listWebAuthnCredentials(amplify, input) {
  return __async(this, null, function* () {
    const authConfig = amplify.getConfig().Auth?.Cognito;
    assertTokenProviderConfig(authConfig);
    const {
      userPoolEndpoint,
      userPoolId
    } = authConfig;
    const {
      tokens
    } = yield amplify.Auth.fetchAuthSession();
    assertAuthTokens(tokens);
    const listWebAuthnCredentialsResult = createListWebAuthnCredentialsClient({
      endpointResolver: createCognitoUserPoolEndpointResolver({
        endpointOverride: userPoolEndpoint
      })
    });
    const {
      Credentials: commandCredentials = [],
      NextToken: nextToken
    } = yield listWebAuthnCredentialsResult({
      region: getRegionFromUserPoolId(userPoolId),
      userAgentValue: getAuthUserAgentValue(AuthAction.ListWebAuthnCredentials)
    }, {
      AccessToken: tokens.accessToken.toString(),
      MaxResults: input?.pageSize,
      NextToken: input?.nextToken
    });
    const credentials = commandCredentials.map((item) => ({
      credentialId: item.CredentialId,
      friendlyCredentialName: item.FriendlyCredentialName,
      relyingPartyId: item.RelyingPartyId,
      authenticatorAttachment: item.AuthenticatorAttachment,
      authenticatorTransports: item.AuthenticatorTransports,
      createdAt: item.CreatedAt ? new Date(item.CreatedAt * 1e3) : void 0
    }));
    return {
      credentials,
      nextToken
    };
  });
}

// node_modules/@aws-amplify/auth/dist/esm/client/apis/listWebAuthnCredentials.mjs
function listWebAuthnCredentials2(input) {
  return __async(this, null, function* () {
    return listWebAuthnCredentials(Amplify, input);
  });
}

// node_modules/@aws-amplify/auth/dist/esm/foundation/factories/serviceClients/cognitoIdentityProvider/createDeleteWebAuthnCredentialClient.mjs
var createDeleteWebAuthnCredentialClient = (config) => composeServiceApi(cognitoUserPoolTransferHandler, createUserPoolSerializer("DeleteWebAuthnCredential"), createUserPoolDeserializer(), __spreadValues(__spreadValues({}, DEFAULT_SERVICE_CLIENT_API_CONFIG), config));

// node_modules/@aws-amplify/auth/dist/esm/foundation/apis/deleteWebAuthnCredential.mjs
function deleteWebAuthnCredential(amplify, input) {
  return __async(this, null, function* () {
    const authConfig = amplify.getConfig().Auth?.Cognito;
    assertTokenProviderConfig(authConfig);
    const {
      userPoolEndpoint,
      userPoolId
    } = authConfig;
    const {
      tokens
    } = yield amplify.Auth.fetchAuthSession();
    assertAuthTokens(tokens);
    const deleteWebAuthnCredentialResult = createDeleteWebAuthnCredentialClient({
      endpointResolver: createCognitoUserPoolEndpointResolver({
        endpointOverride: userPoolEndpoint
      })
    });
    yield deleteWebAuthnCredentialResult({
      region: getRegionFromUserPoolId(userPoolId),
      userAgentValue: getAuthUserAgentValue(AuthAction.DeleteWebAuthnCredential)
    }, {
      AccessToken: tokens.accessToken.toString(),
      CredentialId: input.credentialId
    });
  });
}

// node_modules/@aws-amplify/auth/dist/esm/client/apis/deleteWebAuthnCredential.mjs
function deleteWebAuthnCredential2(input) {
  return __async(this, null, function* () {
    return deleteWebAuthnCredential(Amplify, input);
  });
}

export {
  associateWebAuthnCredential,
  listWebAuthnCredentials2 as listWebAuthnCredentials,
  deleteWebAuthnCredential2 as deleteWebAuthnCredential
};
//# sourceMappingURL=chunk-AQLPJ7RI.js.map
