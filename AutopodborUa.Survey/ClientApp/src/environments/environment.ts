// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  openIdConnectSettings: {
      authority: 'https://localhost:44310',
      client_id: 'autopodbor_ua_client_ui',
      redirect_uri: 'https://localhost:44398/signin-oidc',
      post_logout_redirect_uri: 'https://localhost:44398/',
      response_type: 'id_token token',
      scope: 'openid profile samplesecondapi',
      filterProtocolClaims: true,
      loadUserInfo: true,
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
