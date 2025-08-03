import {
  CognitoAWSCredentialsAndIdentityIdProvider,
  DefaultIdentityIdStore,
  cognitoUserPoolsTokenProvider
} from "./chunk-NE3RA3M4.js";
import {
  Amplify,
  CookieStorage,
  defaultStorage,
  parseAmplifyConfig
} from "./chunk-ZK2US4EJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs
var cognitoCredentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(defaultStorage));

// node_modules/aws-amplify/dist/esm/initSingleton.mjs
var DefaultAmplify = {
  /**
   * Configures Amplify with the {@link resourceConfig} and {@link libraryOptions}.
   *
   * @param resourceConfig The {@link ResourcesConfig} object that is typically imported from the
   * `amplifyconfiguration.json` file. It can also be an object literal created inline when calling `Amplify.configure`.
   * @param libraryOptions The {@link LibraryOptions} additional options for the library.
   *
   * @example
   * import config from './amplifyconfiguration.json';
   *
   * Amplify.configure(config);
   */
  configure(resourceConfig, libraryOptions) {
    const resolvedResourceConfig = parseAmplifyConfig(resourceConfig);
    const cookieBasedKeyValueStorage = new CookieStorage({
      sameSite: "lax"
    });
    const resolvedKeyValueStorage = libraryOptions?.ssr ? cookieBasedKeyValueStorage : defaultStorage;
    const resolvedCredentialsProvider = libraryOptions?.ssr ? new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(cookieBasedKeyValueStorage)) : cognitoCredentialsProvider;
    if (!resolvedResourceConfig.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (libraryOptions?.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (!Amplify.libraryOptions.Auth) {
      cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);
      cognitoUserPoolsTokenProvider.setKeyValueStorage(
        // TODO: allow configure with a public interface
        resolvedKeyValueStorage
      );
      Amplify.configure(resolvedResourceConfig, __spreadProps(__spreadValues({}, libraryOptions), {
        Auth: {
          tokenProvider: cognitoUserPoolsTokenProvider,
          credentialsProvider: resolvedCredentialsProvider
        }
      }));
      return;
    }
    if (libraryOptions) {
      const authLibraryOptions = Amplify.libraryOptions.Auth;
      if (libraryOptions.ssr !== void 0) {
        cognitoUserPoolsTokenProvider.setKeyValueStorage(
          // TODO: allow configure with a public interface
          resolvedKeyValueStorage
        );
        authLibraryOptions.credentialsProvider = resolvedCredentialsProvider;
      }
      Amplify.configure(resolvedResourceConfig, __spreadValues({
        Auth: authLibraryOptions
      }, libraryOptions));
      return;
    }
    Amplify.configure(resolvedResourceConfig);
  },
  /**
   * Returns the {@link ResourcesConfig} object passed in as the `resourceConfig` parameter when calling
   * `Amplify.configure`.
   *
   * @returns An {@link ResourcesConfig} object.
   */
  getConfig() {
    return Amplify.getConfig();
  }
};

export {
  DefaultAmplify
};
//# sourceMappingURL=chunk-5K47WSF5.js.map
